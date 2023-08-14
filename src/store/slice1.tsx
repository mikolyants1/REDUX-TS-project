import {ActionCreatorWithPayload, createSlice,PayloadAction, Slice } from '@reduxjs/toolkit'
 export interface state{
    current:string,
    id:string
}
type action={
    add2:ActionCreatorWithPayload<string,'shop/add2'>,
    add3:ActionCreatorWithPayload<string,'shop/add3'>
}
const initialState:state={
    current:'',
    id:''
}
const slice1:Slice<state,{
    add2:(state:state,action:PayloadAction<string>)=>void,
    add3:(state:state,action:PayloadAction<string>)=>void,
},"shop">=createSlice({
    name:'shop',
    initialState,
    reducers:{  
        add2:(state,action)=>{
            state.current=action.payload     
                },
        add3:(state,action)=>{
            state.id=action.payload
                },
    }
})
export const {add2,add3}:action=slice1.actions
export default slice1.reducer