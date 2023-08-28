import {createSlice,PayloadAction,Slice,ActionCreatorWithPayload } from '@reduxjs/toolkit'
import {union, union3 } from '../types/state'
export type bask={
    name?:union3,
    price?:union,
    src?:union,
    color?:union
}
export interface User{
  name:union,
  phone:union,
  bask:bask[],
  id:number
}
export interface state{
    user:User[]
}
interface pay{
  name:union,
  phone:union,
  obj:User[]
}
interface pay1{
    id:number|undefined,
    name:union3,
    price:union,
    src:union,
    color:union
}
interface pay2{
    id:number,
    index:number
}
type action={
    add:ActionCreatorWithPayload<pay,'shop/add'>,
    add1:ActionCreatorWithPayload<pay1,'shop/add1'>,
    del:ActionCreatorWithPayload<pay2,'shop/del'>,
}
const initialState:state={
  user:[],
} 

const slice:Slice<state,{
    add:(state:state,action:PayloadAction<pay>)=>void,
    add1:(state:state,action:PayloadAction<pay1>)=>void,
    del:(state:state,action:PayloadAction<pay2>)=>void,
},"shop">=createSlice({
    name:'shop',
    initialState,
    reducers:{
        add:({user},{payload})=>{
            const {name,phone,obj}=payload
            user.push({
                name:name,
                phone:phone,
                bask:[],
                id:Object.keys(obj).length
            }) 
          
        },
        add1:({user},{payload})=>{
        const {id,name,price,src,color}=payload
       if (typeof id=='number'){
            user[id].bask.push({
                name:name,
                price:price,
                src:src,
                color:color
            })
          }
        },
        del:({user},{payload})=>{
            const {id,index}=payload
            user[id].bask.splice(index,1)
        }
    }
})
export const {add,add1,del}:action=slice.actions
export default slice.reducer