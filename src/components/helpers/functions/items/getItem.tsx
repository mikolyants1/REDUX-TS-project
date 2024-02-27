import { Und, union3 } from "../../../../types/state";
import { item1, item2, item3, item4, mass } from "../../../data/items";

export function getItem(id:union3):Und<mass>{
    const arr:mass[][] = [item1,item2,item3,item4];
    const newArr:mass[] = arr.flatMap((i:mass[])=>i);
    return newArr.find(({name}:mass):boolean=>name==id);
   };