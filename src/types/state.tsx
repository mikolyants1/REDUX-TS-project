import React,{FC,ReactNode,Dispatch} from "react"
import { useDispatch, useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"
import store from "../store/store"
 type Props={
    src:string,
    name:string,
    price:string
}
export interface props{
    item:Props[],
    show:number
}
export interface state1{
    item:Props[]
}
 interface state2{
    state:state1,
    value:string,
    set:Dispatch<React.SetStateAction<state1>>
}
export const sort:FC<state2>=({state:{item},value,set}):ReactNode=> {
const [mass,mass1]:number[][]&Props[][]=[[],[]]
item.forEach(({price}:Props):number=>mass.push(parseInt(price)))
mass.sort((x:number,y:number):number=>value=='down'?y-x:x-y)
for (let i = 0; i < mass.length; i++) {
  for (let ind = 0; ind < item.length; ind++) {
    if (mass[i]==parseInt(item[ind].price)) {
        mass1.push(item[ind])
        }
      }
     }
 set({item:mass1})
 return 
}
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector