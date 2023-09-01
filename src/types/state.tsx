import {Dispatch,SetStateAction} from "react"
import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import { mass } from "../components/items"
import { User } from "../store/slice"
import store from "../store/store"
 type Props={
    src:string,
    name:string,
    price:string,
    src1:string,
    src2:string
}
export type func=JSX.Element|null
export type union=string|undefined
export type union1=User|undefined
export type union2=mass|undefined
export type union3=string|null
export type union4=number|undefined
export enum LinkStyle {
    textDecoration='none'
}
export enum DivEntry {
    height='15px'
}
export interface props{
    item:Props[],
    show:number,
    id?:union
}
export interface state1{
    item:Props[]
}
export interface state2{
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
export const overOut=(item:string,i:number,id:union):void=>{
const img:NodeListOf<HTMLImageElement>=document.querySelectorAll(`#${id}`)
img[i].src=item
    }
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector