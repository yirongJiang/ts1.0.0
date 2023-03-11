import { isTemplateExpression } from "typescript";

export interface StateProps {
  id: number;
  text: string;
  isFinished: boolean;
}
export interface ActionProps {
  type: string;
  [key: string]: any
}

export  const reducer = (state: StateProps[], action: ActionProps) => {
  const newState = [...state]
  switch (action.type) {
    case 'ADD':
      return [...newState, action.todo]
    case 'CHANGEFINISHED':
      return newState.map((item, index) => {
        if (item.id === action.id) {
          return Object.assign({}, item, { isFinished: !item.isFinished })
        }
        return item
      })
    case 'DELETE':
      return newState.filter((item, index) => {
        return item.id !== action.id
      })
    default:
      return state
  }
}