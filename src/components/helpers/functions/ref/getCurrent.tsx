import { IObj} from "../../../../types/state"

export function getCurrent(props:IObj[]):HTMLDivElement[]{
  return props.map(({ref}:IObj)=>ref.current);
};