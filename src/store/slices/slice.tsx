import {createSlice,PayloadAction,Slice} from '@reduxjs/toolkit'
import {union, union3 ,union4} from '../../types/state'

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
}
export interface pay{
  name:union,
  phone:union,
  obj:User[]
}
export interface pay1{
    id:union4,
    name:union3,
    price:union,
    src:union,
    color:union,
    bask:bask[]|undefined
}

export interface pay2{
    id:number,
    index:number,
    bask:bask[]
}

const initialState:state={
  user:[],
} 

const slice:Slice<state,{
    addUser:(state:state,action:PayloadAction<pay>)=>void,
    addItem:(state:state,action:PayloadAction<pay1>)=>void,
    delItem:(state:state,action:PayloadAction<pay2>)=>void,
},"shop">=createSlice({
    name:'shop',
    initialState,
    reducers:{
        addUser:(state,{payload})=>{
        const {name,phone,obj}:pay=payload
        const newUser:User = {
            name:name,
            phone:phone,
            bask:[],
            id:Object.keys(obj).length
        }
        state.user=[ ...obj, newUser ]
        },
        addItem:(state,{payload})=>{
        const {id,name,price,src,color,bask}:pay1=payload
        if (typeof id=='number'&&bask){
            const newItem:bask = {
                name:name,
                price:price,
                src:src,
                color:color
            }
          state.user[id].bask=[...bask, newItem]
          }
        },
        delItem:(state,{payload})=>{
         const {id,index,bask}:pay2=payload
         const newBask:bask[]=bask.filter(
         (_:bask,i:number):boolean=>i!==index)
         state.user[id].bask=[...newBask]
        },
    }
})
export const action1=slice.actions
export default slice.reducer