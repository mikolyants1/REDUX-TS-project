import { Und, Union3,IMass } from "../../../../types/state";
import { item1, item2, item3, item4} from "../../../data/items";

export function getItem(id:Union3):Und<IMass>{
  const arr:IMass[][] = [item1,item2,item3,item4];
  const newArr:IMass[] = arr.flatMap((i:IMass[])=>i);
  return newArr.find(({name}:IMass):boolean=>name==id);
};