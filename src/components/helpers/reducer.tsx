import { Dispatch, useReducer } from "react"
import { Styles, action, door } from "../../types/state"

const initial:door = {
    name:'',
    phone:'',
    auth:false,
    error:''
 };
 
export function useReduce():[door,Dispatch<action>]{
  const [state,dispatch] = useReducer(reducer,initial)
     function reducer(prev:door,next:action):door{
            return { ...prev ,...next };
        };
     return [state,dispatch];
    }

 export function reducer(state:Styles,{type}:action):Styles{
      switch (type) {
       case 'black':
       return {
         style1:'rgb(240, 47, 156)',
         style2:'black',
         style3:'black'
          };
       case 'grey':
       return {
         style1:'black',
         style2:'rgb(240, 47, 156)',
         style3:'black'
          };
       case 'white':
       return {
         style1:'black',
         style2:'black',
         style3:'rgb(240, 47, 156)'
          };
       default:
       return state;
       }
    } 