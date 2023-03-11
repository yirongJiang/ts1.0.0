import React, { useContext, useReducer, useState } from 'react'
import { ActionProps, reducer } from '../store/reducer';

export interface StateProps {
  id: number;
  text: string;
  isFinished: boolean;
}
export interface ContextProps {
  state: StateProps[],
 dispatch:React.Dispatch<ActionProps>
}

export const todoContext = React.createContext({} as ContextProps)

export default function Myprovider(props: React.PropsWithChildren<{}>) {

  const initState: StateProps[] = []
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <todoContext.Provider 
    value={{
      state, dispatch
    }}>
      {props.children}
    </todoContext.Provider>
  )
}
