import { Dispatch, memo, useContext } from "react"
import styles from '../../../../style/about.module.css'
import { IAboutContext, Action, IObj } from "../../../../types/state"
import { AboutTheme } from "../../../helpers/context"

interface props {
   refs:IObj[],
   dispatch:Dispatch<Action>
}
function ColorContainer({refs,dispatch}:props):JSX.Element {
 const {move} = useContext<IAboutContext>(AboutTheme);
 
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
        {refs.map(({name,ref}:IObj,i:number):JSX.Element=>(
         <div className={styles[name]} ref={ref}
         key={i} onClick={toggle(name)} />
        ))}
      </div>
    </div>
  )
}

export default memo(ColorContainer)