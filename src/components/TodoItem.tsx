import React, { useContext } from 'react'
import { todoContext } from './Myprovider';
import { StateProps } from './Myprovider'
interface IProps {
  todo: StateProps;
}

export default function TodoItem({ todo }: IProps) {
  const {deleteTodo,changeTodo}=useContext(todoContext)

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
