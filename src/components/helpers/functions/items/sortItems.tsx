import { IMass } from "../../../../types/state";
import { item5} from "../../../data/items";

function sortItems(value:string):IMass[] {
  const val:string = value.trim().toLowerCase();
  return item5.filter((i:IMass)=>(
    i.name.toLowerCase().indexOf(val) !== -1
  ));
}

export default sortItems