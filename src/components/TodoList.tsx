import React, { useContext } from 'react'
import { todoContext } from './Myprovider';
import { StateProps } from './Myprovider'
import TodoItem from './TodoItem'

interface IProps {
  todoList: StateProps[];
  changeTodo: (id: number) => void;
  deleteTodo: (id: number) => void
}


export default function TodoList() {
  const {todoList}=useContext(todoContext)
  const todoListdom = todoList.map((item,index )=> <TodoItem todo={item}  />)
  return (
    <div>{todoListdom}</div>
  )
}
