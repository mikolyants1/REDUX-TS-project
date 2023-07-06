import {createSlice,PayloadAction } from '@reduxjs/toolkit'
interface state{
    current:string[],
    id:string[]
}
const initialState:state={
    current:[],
    id:[]
}
const slice1=createSlice({
    name:'shop',
    initialState,
    reducers:{  
        add2:(state,action:PayloadAction<string>):void=>{
            state.current=[]
            state.current.push(action.payload)
           
           },
        add3:(state,action:PayloadAction<string>):void=>{
            state.id.push(action.payload)
            if (state.id.length>2) {
                state.id.shift() 
             }
          },
    }
})
export const {add2,add3}=slice1.actions
export default slice1.reducer