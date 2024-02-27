import { item1, mass } from "../../../data/items"

export default (name:string):boolean => {
  return item1.some((i:mass)=>i.name == name);
};