import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import { mass,mass1 } from "../components/items"
import { User } from "../store/slice"
import store from "../store/store"
import { MutableRefObject,createContext,Context} from "react"
import back1 from '../img/back1.jpg'
import back2 from '../img/back.jpg'
export type func=JSX.Element|null
export type union=string|undefined
export type union1=User|undefined
export type union2=mass|undefined
export type union3=string|null
export type union4=number|undefined
export type union5=mass1|undefined
export type union6=HTMLSelectElement|HTMLInputElement
interface Theme{
    back1:string,
    back2:string,
    back3:string,
}
export enum LinkStyle {
    textDecoration='none',
    color='white'
}
export enum style {
    width='100%',
    height='100%',
    border='1px solid grey',
    color='white',
    borderRadius='15px',
    background='none',
    outline='none'
  }
export enum DivEntry {
    height='25px',
    fontSize='23px',
    color='white',
    textAlign='center',
    width='100%',
    marginTop='10px'
}
export type reduce=null|mass[]
export interface props{
    show:reduce,
    id?:union
}
export interface state1{
    item:mass[]
}
export type refType=MutableRefObject<HTMLDivElement>
export interface obj {
  ref:refType,
  name:string
}
export const theme:Theme={
    back1:`url(${back1}) no-repeat`,
    back2:`url(${back2}) no-repeat`,
    back3:'none'
}
export const BackContext:Context<string>=createContext(theme.back3)
export function MakeArrFromRef(arr:refType[]):obj[]{
 const names:string[]=['black','grey','white']
 return arr.map((item:refType,i:number):obj=>{
   return {ref:item,name:`${names[i]}`}
    })
  }
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector