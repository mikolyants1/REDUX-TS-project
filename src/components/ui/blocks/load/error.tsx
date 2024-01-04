import { useEffect, useState } from "react";
import { error } from "../../../style/style";

function Error():JSX.Element {
 const [err,setErr] = useState<string>('');
 useEffect(():void=>{
  setInterval(():void => {
   setTimeout(():void=>setErr(''),0);
   setTimeout(():void=>setErr('.'),200);
   setTimeout(():void=>setErr('..'),400);
   setTimeout(():void=>setErr('...'),600);
   }, 800);
  },[]);
    return (
         <div style={error}>
           error {err}
         </div>
       );
}

export default Error