import React, { useContext, useState } from 'react'

export interface StateProps {
  id: number;
  text: string;
  isFinished: boolean;
}
export interface ContextProps {
  todoList: StateProps[],
  deleteTodo: (id: number) => void,
  addTodo: (todo:StateProps) => void,
  changeTodo: (id: number) => void
}

export const todoContext = React.createContext({} as ContextProps)

export default function Myprovider(props: React.PropsWithChildren<{}>) {
  const [todoList, setTodoList] = useState<StateProps[]>([])
  const deleteTodo = (id: number) => {
    const newTodoList = [...todoList]
    newTodoList.forEach((item, index) => {
      if (id === item.id) {
        newTodoList.splice(index, 1)
      }
    })
    setTodoList(newTodoList)
  }

  const changeTodo = (id: number) => {
    const newTodoList = todoList.map(item => {
      if (item.id === id) {
        return Object.assign({}, item, {
          isFinished: !item.isFinished
        })
      }
      return item
    })
    setTodoList(newTodoList)
  }

  const addTodo = (todo: StateProps) => {
    setTodoList([...todoList, todo])
  }

  return (
    <todoContext.Provider value={{
      deleteTodo,
      addTodo,
      changeTodo,
      todoList
    }}>
      {props.children}
    </todoContext.Provider>
  )
}
