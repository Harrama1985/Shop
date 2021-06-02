import { createContext,FC, useReducer } from "react";

interface IState{
  gender:string;
}
interface IAction{
  type:string;
  payload:string
}
interface IContextProps {     //hada le type dial contextkandirouh bihad tarika had lhala kandirouha fihalat radi nkhedmo bi usereaducer ohit usereducer fih state odispatch khass ndir lihom le type 
  state: IState;
  dispatch: ({type,payload}:IAction) => void;
}
const initialState={
  gender:''
}

export const ContextGender = createContext({} as IContextProps) //ohna 3tito abject khawi 3la chkel interface  li fih state odispatch

function reducer(state:IState,action:IAction){
  switch (action.type) {
    case 'WOMEN':
      return {
        ...state,
        gender:action.payload
      }
    case 'MEN':
      return {
        ...state,
        gender:action.payload
      }
  
    default:
      return state;
  }
}

const ProviderGender:FC =({children})=>{
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ContextGender.Provider value={{state,dispatch}}>
      {children}
    </ContextGender.Provider>
  )
}

export default ProviderGender

