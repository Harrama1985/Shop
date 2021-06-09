import { createContext,FC, useReducer } from "react";
import {IProduct} from '../../common/interfaces/interfaces'

interface IState{
  products:IProduct[];
}
interface IAction{
  type:string;
  payload:IProduct[]|any
}
interface IContextProps {      
  stateData: IState;
  dispatch: ({type,payload}:IAction) => void;
}
const initialState={
  products: []
}

export const ContextProducts = createContext({} as IContextProps) 

function reducer(state:IState,action:IAction){
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        products:[...action.payload]
      }
  
    default:
      return state;
  }
}

const ProviderProducts:FC =({children})=>{
  const [stateData, dispatch] = useReducer(reducer, initialState)
  return (
    <ContextProducts.Provider value={{stateData,dispatch}}>
      {children}
    </ContextProducts.Provider>
  )
}

export default ProviderProducts

