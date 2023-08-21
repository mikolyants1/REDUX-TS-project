import {Dispatch,SetStateAction} from "react"
import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import store from "../store/store"
 type Props={
    src:string,
    name:string,
    price:string,
    src1:string,
    src2:string
}
export interface props{
    item:Props[],
    show:number,
    id?:string|undefined
}
export interface state1{
    item:Props[]
}
 interface state2{
    state:state1,
    value:string,
    set:Dispatch<SetStateAction<state1>>
}
export const sort=({state:{item},value,set}:state2):void=>{
const [mass,mass1]:number[][]&Props[][]=[[],[]]
item.forEach(({price}:Props):number=>mass.push(parseInt(price)))
mass.sort((x:number,y:number):number=>value=='down'?y-x:x-y)
for (let i:number = 0; i < mass.length; i++) {
item.forEach((x:Props):void=>{
if (mass[i]==parseInt(x.price)) mass1.push(x)
    })
   }
 set({item:mass1})
}
export const overOut=(item:string,i:number,id:string|undefined):void=>{
const img:NodeListOf<HTMLImageElement>=document.querySelectorAll(`#${id}`)
img[i].src=item
    }
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector