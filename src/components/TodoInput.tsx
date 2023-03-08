import React, { useContext, useState } from "react"
import { todoContext } from "./Myprovider"
// import { StateProps } from "./Todo"

// interface IProps {
//   addTodo: (todo: StateProps) => void
// }

export default function TodoInput() {
  const [text, setText] = useState('')
  const { addTodo } = useContext(todoContext)

  const changeTextHandler = (e: React.ChangeEvent) => {
    setText((e.target as HTMLInputElement).value)
  }
  const addToHandler = () => {
    addTodo({
      id: new Date().getTime(),
      text: text,
      isFinished: false
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
