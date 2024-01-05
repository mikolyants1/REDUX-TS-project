import { obj, refType, union2, union3 } from "../../types/state"
import { mass } from "../data/items";

export function MakeArrFromRef(...props:refType[]):obj[]{
    const names:string[] = ['black','grey','white'];
    return props.map((item:refType,i:number):obj=>(
          {
            ref:item,
            name:`${names[i]}`
        }
       ));
   };

   export function getCurrent(props:obj[]):HTMLDivElement[]{
    return props.map(({ref}:obj)=>ref.current);
   };

   export function getItem(arr:mass[][],id:union3):union2{
    const newArr:mass[]=arr.flatMap((i:mass[])=>i);
    return newArr.find(({name}:mass):boolean=>name==id);
   };