import { obj, refType } from "../../../types/state";

export function MakeArrFromRef(...props:refType[]):obj[]{
    const names:string[] = ['black','grey','white'];
    return props.map((item:refType,i:number):obj=>(
          {
            ref:item,
            name:`${names[i]}`
          }
       ));
    };