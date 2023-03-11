import React, { useContext } from 'react'
import { todoContext } from './Myprovider';
import { StateProps } from '../store/reducer'
interface IProps {
  todo: StateProps;
}

export default function TodoItem({ todo }: IProps) {
  const { dispatch } = useContext(todoContext)

  const changeHandler = () => {
    dispatch({
      type: 'CHANGEFINISHED',
      id: todo.id
    })
  }

  const spanStyle = {
    textDecoration: todo.isFinished ? 'line-through' : 'none'
  }

  const deleteHandler = () => {
    dispatch({
      type: 'DELETE',
      id: todo.id
    })
  }
  return (
    <div>
      <input type="checkbox" checked={todo.isFinished} onChange={changeHandler} />
      <span style={spanStyle}>{todo.text}</span>
      <button onClick={deleteHandler}>删除</button>
    </div>
  )
}
