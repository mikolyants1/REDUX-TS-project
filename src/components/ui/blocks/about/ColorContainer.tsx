import { Dispatch, memo, useContext } from "react"
import styles from '../../../../style/about.module.css'
import { AboutContext, action, obj } from "../../../../types/state"
import { AboutTheme } from "../../../helpers/context"

interface props {
   refs:obj[],
   dispatch:Dispatch<action>
}
function ColorContainer({refs,dispatch}:props):JSX.Element {
 const {move} = useContext<AboutContext>(AboutTheme);
 
 const toggle = (name:string) => ():void => {
  dispatch({type:name});
  move({color:name})
 };

  return (
    <div className={styles.color}>
      <div className={styles.color0}>
         цвет
      </div>
      <div className={styles.color1}>
        {refs.map(({name,ref}:obj,i:number):JSX.Element=>(
         <div className={styles[name]} ref={ref}
         key={i} onClick={toggle(name)} />
        ))}
      </div>
    </div>
  )
}

export default memo(ColorContainer)