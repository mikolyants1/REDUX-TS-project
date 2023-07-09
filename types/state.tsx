import React from "react"
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
    set:React.SetStateAction<any>
}
export const sort:React.FC<state2>=({state,value,set}):React.ReactNode=> {
    const mass:number[]=[]
    for (let i = 0; i < state.item.length; i++) {
      mass.push(parseInt(state.item[i].price))
    }
    const mass1:Props[]=[]
value=='down'?mass.sort((x,y)=>y-x):mass.sort((x,y)=>x-y)
    for (let i = 0; i < mass.length; i++) {
        for (let ind = 0; ind < state.item.length; ind++) {
           if (mass[i]==parseInt(state.item[ind].price)) {
            mass1.push(state.item[ind])
           }
        }
       }
     return set({item:mass1})
}