import {createSlice,PayloadAction,Slice,ActionCreatorWithPayload } from '@reduxjs/toolkit'
import {union, union3 ,union4} from '../types/state'
import { mass,item1 } from '../components/items'
export type bask={
    name:union3,
    price:union,
    src:union,
    color:union
}
export interface User{
  name:union,
  phone:union,
  bask:bask[],
  id:number
}
export interface state{
    user:User[],
    item:mass[]
}
interface pay{
  name:union,
  phone:union,
  obj:User[]
}
export interface pay1{
    id:union4,
    name:union3,
    price:union,
    src:union,
    color:union
}

interface pay2{
    id:number,
    index:number
}
interface pay3 {
    item:mass[]
}
type action={
    add:ActionCreatorWithPayload<pay,'shop/add'>,
    add1:ActionCreatorWithPayload<pay1,'shop/add1'>,
    del:ActionCreatorWithPayload<pay2,'shop/del'>,
    set:ActionCreatorWithPayload<pay3,'shop/set'>
}
const initialState:state={
  user:[],
  item:item1
} 

const slice:Slice<state,{
    add:(state:state,action:PayloadAction<pay>)=>void,
    add1:(state:state,action:PayloadAction<pay1>)=>void,
    del:(state:state,action:PayloadAction<pay2>)=>void,
    set:(state:state,action:PayloadAction<pay3>)=>void
},"shop">=createSlice({
    name:'shop',
    initialState,
    reducers:{
        add:({user},{payload})=>{
        const {name,phone,obj}:pay=payload
            user.push({
                name:name,
                phone:phone,
                bask:[],
                id:Object.keys(obj).length
            }) 
          
        },
        add1:({user},{payload})=>{
        const {id,name,price,src,color}:pay1=payload
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
            const {id,index}:pay2=payload
            user[id].bask.splice(index,1)
        },
        set:({item},{payload})=>{
          item=payload.item
        }
    }
})
export const {add,add1,del,set}:action=slice.actions
export default slice.reducer