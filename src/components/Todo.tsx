import React, { useState } from 'react'
import Myprovider from './Myprovider'
import TodoInput from './TodoInput'
import TodoList from './TodoList'


export default function Todo() {

  return (
    <Myprovider>
      <TodoInput />
      <TodoList />
    </Myprovider>
  )
}
