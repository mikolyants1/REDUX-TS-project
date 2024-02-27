import { item5, mass } from "../../../data/items";

function sortItems(value:string):mass[] {
  const val:string = value.trim().toLowerCase();
  return item5.filter((i:mass)=>(
    i.name.toLowerCase().indexOf(val) !== -1
  ));
}

export default sortItems