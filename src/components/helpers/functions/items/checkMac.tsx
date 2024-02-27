import { IMass } from "../../../../types/state";
import { item1 } from "../../../data/items"

export default (name:string):boolean => {
  return item1.some((i:IMass)=>i.name == name);
};