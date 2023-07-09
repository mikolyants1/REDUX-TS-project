import {createSlice,PayloadAction } from '@reduxjs/toolkit'
export type bask={
    name?:string|undefined,
    price?:string|undefined,
    src?:string|undefined,
}
export interface User{
  name:string|undefined,
  phone:string|undefined,
  bask:bask[],
  id:number
}
interface state{
    user:User[]
}
interface pay{
    name:string|undefined,
  phone:string|undefined,
  user:User[]
}
interface pay1{
    id:number,
    name:string|undefined,
    price:string|undefined,
    src:string|undefined
}
interface pay2{
    id:number,
    index:number
}
const initialState:state={
    user:[],
}

const slice=createSlice({
    name:'shop',
    initialState,
    reducers:{
        add:(state,action:PayloadAction<pay>):void=>{
            const {name,phone,user}=action.payload
            state.user.push({
                name:name,
                phone:phone,
                bask:[],
                id:Object.keys(user).length
            }) 
          
        },
        add1:(state,action:PayloadAction<pay1>):void=>{
        const  {id,name,price,src}=action.payload
            state.user[id].bask.push({
                name:name,
                price:price,
                src:src,
            })

        },
        del:(state,action:PayloadAction<pay2>):void=>{
            const {id,index}=action.payload
          state.user[id].bask.splice(index,1)
        }
    }
})
export const {add,add1,del}=slice.actions
export default slice.reducer