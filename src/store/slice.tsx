import {createSlice,PayloadAction,Slice,ActionCreatorWithPayload } from '@reduxjs/toolkit'
export type bask={
    name?:string|null,
    price?:string|undefined,
    src?:string|undefined,
}
export interface User{
  name:string|undefined,
  phone:string|undefined,
  bask:bask[],
  id:number
}
export interface state{
    user:User[]
}
interface pay{
    name:string|undefined,
  phone:string|undefined,
  obj:User[]
}
interface pay1{
    id:number|undefined,
    name:string|null,
    price:string|undefined,
    src:string|undefined
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
        const {id,name,price,src}=payload
       if (typeof id=='number'){
            user[id].bask.push({
                name:name,
                price:price,
                src:src,
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