import {createSlice,PayloadAction } from '@reduxjs/toolkit'
interface state{
    current:string,
    id:string
}
const initialState:state={
    current:'',
    id:''
}
const slice1=createSlice({
    name:'shop',
    initialState,
    reducers:{  
        add2:(state,action:PayloadAction<string>):void=>{
            state.current=action.payload
           
           },
        add3:(state,action:PayloadAction<string>):void=>{
            state.id=action.payload
            
          },
    }
})
export const {add2,add3}=slice1.actions
export default slice1.reducer