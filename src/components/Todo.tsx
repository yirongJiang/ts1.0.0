import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'


export interface StateProps {
  id: number;
  text: string;
  isFinished: boolean;
}

export default function Todo() {
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
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList todoList={todoList} changeTodo={changeTodo} deleteTodo={deleteTodo} />
    </div>
  )
}
