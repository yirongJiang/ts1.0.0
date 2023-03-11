import React, { useContext, useState } from "react"
import { todoContext } from "./Myprovider"


export default function TodoInput() {
  const [text, setText] = useState('')
  const { dispatch } = useContext(todoContext)

  const changeTextHandler = (e: React.ChangeEvent) => {
    setText((e.target as HTMLInputElement).value)
  }
  const addToHandler = () => {
    dispatch({
      type: 'ADD',
      todo: {
        id: new Date().getTime(),
        text: text,
        isFinished: false
      }

    })
    setText('')
    console.log(text)
  }

  return (
    <div>
      <input type="text" placeholder="请输入待办事项" onChange={changeTextHandler} value={text} />
      <button onClick={addToHandler}>Add</button>
    </div>
  )
}
