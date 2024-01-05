import {NamedExoticComponent,memo} from 'react'
import styles from '../../../style/entry.module.css'
import { style } from '../../style/style'
import { Evt } from '../../../types/state'

interface regProp {
    set:(e:Evt)=>void,
    place:string,
    name:string,
    id:number
     }
     
 export const Register:NamedExoticComponent<regProp>=memo(
   ({set,place,name,id}:regProp):JSX.Element=>{
   return (
       <div className={styles.info}>
         <input placeholder={place} style={style}
          tabIndex={id} onChange={set}
          type="text" name={name} />
       </div>
       )
     })