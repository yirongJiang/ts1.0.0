import React from 'react'
import { StateProps } from './Todo'
interface IProps {
  todo: StateProps;
  changeTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

export default function TodoItem({ todo, changeTodo, deleteTodo }: IProps) {

  const changeHandler = () => {
    changeTodo(todo.id)
  }

  const spanStyle = {
    textDecoration: todo.isFinished ? 'line-through' : 'none'
  }

  const deleteHandler = () => {
    deleteTodo(todo.id)
  }
  return (
    <div>
      <input type="checkbox" checked={todo.isFinished} onChange={changeHandler} />
      <span style={spanStyle}>{todo.text}</span>
      <button onClick={deleteHandler}>删除</button>
    </div>
  )
}
