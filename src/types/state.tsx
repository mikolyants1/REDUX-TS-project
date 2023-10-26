import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import { mass,mass1 } from "../components/items"
import store from "../store/store"
import { MutableRefObject,createContext, useReducer, Dispatch} from "react"
import back1 from '../img/back1.jpg'
import back2 from '../img/back.jpg'
import { User } from "../store/slice"
import { ActionCreatorWithPayload } from "@reduxjs/toolkit"
export type func=JSX.Element|null
export type union=string|undefined
export type union1=User|undefined
export type union2=mass|undefined
export type union3=string|null
export type union4=number|undefined
export type union5=mass1|undefined
export type union6=HTMLSelectElement|HTMLInputElement
export type setAction=ActionCreatorWithPayload<string>
interface Theme{
    back1:string,
    back2:string,
    back3:string,
}
export enum LinkStyle {
    textDecoration='none',
}
export enum LinkStyle1 {
    textDecoration='none',
    color='white'
}
export enum ScrollStyle {
    width='100%',
    height='80%',
    marginTop='10%',
    marginLeft='10%',
    borderRadius='50%'
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
export enum style1 {
    width='90%',
    marginLeft='5%',
    height='100%'
    }
 export  enum style2 {
    width='100%',
    minWidth='450px'
    }
 export enum style3{
    width='70%',
    height='25px',
    borderRadius='5px',
    border='1px solid grey'
      }
 export enum style4 {
        color='grey'
      }
 export enum style5 {
        width='80%',
        margin='auto',
        display='flex',
        justifyContent='center'
      }
 export enum style6 {
        border=`1px solid grey`,
        width='93%',
        height='26px',
        textAlign='center',
        fontSize='20px',
        backgroundColor='rgb(240, 240, 240)',
    }
 export interface door{
        name:string,
        phone:string,
        auth:boolean,
        error:string
    }
export type reduce=null|mass[]
export interface comp {
    pl:string,
    data:string,
    set:setAction
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
export const BackContext=createContext<string>(theme.back3)

export function MakeArrFromRef(...props:refType[]):obj[]{
 const names:string[]=['black','grey','white']
 return props.map((item:refType,i:number):obj=>(
       {ref:item,name:`${names[i]}`}
    ))
  }
export function getCurrent(props:obj[]):HTMLDivElement[]{
 return props.map(({ref}:obj)=>ref.current)
}

export function getItem(arr:mass[][],id:union3):union2{
 const newArr:mass[]=arr.flatMap((i:mass[])=>i)
 return newArr.find(({name}:mass):boolean=>name==id)
}
type action=Record<string,boolean|string>
export function useReduce():[door,Dispatch<action>]{
const [state,setState]=useReducer(reducer,
    {name:'',phone:'',auth:false,error:''})
 function reducer(prev:door,next:action):door{
        return { ...prev ,...next }
    }
 return [state,setState]
}
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector