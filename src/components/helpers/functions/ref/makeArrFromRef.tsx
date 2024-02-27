import { IObj, RefType } from "../../../../types/state";

export function MakeArrFromRef(...props:RefType[]):IObj[]{
    const names:string[] = ['black','grey','white'];
    return props.map((item:RefType,i:number):IObj=>(
          {
            ref:item,
            name:`${names[i]}`
          }
       ));
    };