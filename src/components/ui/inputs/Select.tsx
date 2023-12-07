import {ChangeEvent} from 'react'
import { union6 } from '../../../types/state'
import styles from '../../../style/sale.module.css'

interface selProp{
    value:string,
    onChange:(e:ChangeEvent<union6>)=>void,
    children:JSX.Element
  }
interface Option{
    title:string,
    val:string
  }
  
export function Select(props:selProp):JSX.Element{
 const values:Option[]=[
      {val:'up',title:'по возрастанию'},
      {val:'down',title:'по убыванию'},
    ]
    return (
      <>
        {props.children}
        <select className={styles.select} name='val' {...props}>
         {values.map(({title,val}:Option):JSX.Element=>(
          <option key={val} value={val}>
              {title}
          </option>
          ))}
        </select>
      </>
    )
  }