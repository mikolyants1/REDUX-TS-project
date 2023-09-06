import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import { mass } from "../components/items"
import { User } from "../store/slice"
import store from "../store/store"
export type Props={
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
export interface props{
    item:Props[],
    show:number,
    id?:union
}
export interface state1{
    item:Props[]
}
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector