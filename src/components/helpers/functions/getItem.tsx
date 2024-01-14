import { Und, union3 } from "../../../types/state";
import { mass } from "../../data/items";

export function getItem(arr:mass[][],id:union3):Und<mass>{
    const newArr:mass[]=arr.flatMap((i:mass[])=>i);
    return newArr.find(({name}:mass):boolean=>name==id);
   };