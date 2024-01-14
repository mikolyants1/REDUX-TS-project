import { memo, useContext } from "react"
import styles from '../../../../style/about.module.css'
import { AboutContext, obj } from "../../../../types/state"
import { AboutTheme } from "../../../helpers/context"

interface props {
   refs:obj[]
}
function ColorContainer({refs}:props):JSX.Element {
 const {toggle} = useContext<AboutContext>(AboutTheme);
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