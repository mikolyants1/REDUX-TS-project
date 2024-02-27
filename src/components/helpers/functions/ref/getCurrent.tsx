import { obj} from "../../../../types/state"

   export function getCurrent(props:obj[]):HTMLDivElement[]{
    return props.map(({ref}:obj)=>ref.current);
   };