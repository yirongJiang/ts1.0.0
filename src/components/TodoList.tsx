import React from 'react'
import { StateProps } from './Todo'
import TodoItem from './TodoItem'

interface IProps {
  todoList: StateProps[];
  changeTodo: (id: number) => void;
  deleteTodo: (id: number) => void
}


export default function TodoList({ todoList, changeTodo,deleteTodo }: IProps) {
  const todoListdom = todoList.map((item,index )=> <TodoItem todo={item} changeTodo={changeTodo} deleteTodo={deleteTodo}  />)
  return (
    <div>{todoListdom}</div>
  )
}
