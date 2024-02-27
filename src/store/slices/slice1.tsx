import {createSlice,PayloadAction, Slice } from '@reduxjs/toolkit'
 export interface state{
    current:string,
    id:string
}

const initialState:state={
    current:'',
    id:''
}
const slice1:Slice<state,{
    setCurrent:(state:state,action:PayloadAction<string>)=>void,
    setId:(state:state,action:PayloadAction<string>)=>void,
},"shop">=createSlice({
    name:'shop',
    initialState,
    reducers:{  
        setCurrent:(state,action)=>{
         state.current = action.payload     
        },
        setId:(state,action)=>{
         state.id = action.payload
        },
    }
})
export const action2=slice1.actions
export default slice1.reducer