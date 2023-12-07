import { ChangeEvent, Dispatch, NamedExoticComponent,
SetStateAction, memo } from "react"
import { Evt,func,union6 } from "../../../types/state"
import img1 from '../../../img/arr.png'
import { User } from "../../../store/slices/slice"
import { ScrollStyle, style } from "../../style/style"
import styles from '../../../style/entry.module.css'
import styles1 from '../../../style/about.module.css'
import styles2 from '../../../style/sale.module.css'

interface scrollProp {
    set:Dispatch<SetStateAction<number>>,
    className:string,
  }
 export const ScrollBut:NamedExoticComponent<scrollProp>=memo(
   ({set,className}:scrollProp):JSX.Element=>{
    const press=():void=>{
     className=='next'
     ? set((x:number)=>x==2?0:x+1)
     : set((x:number)=>x==0?2:x-1)
      }
  return (
    <button onClick={press} className={styles1[className]}>
      <img style={ScrollStyle} src={img1} alt="" />
    </button>
    )
  })

  interface LoginProp {
    user:User[],
    data:string,
    children:JSX.Element
  }
  
export function Login({user,data,children}:LoginProp):func{
   return (
    <div className={styles.info}>
       {children}
      <datalist id={data}>
        {user.map(({name,phone}:User,i:number):JSX.Element=>(
          <option key={i} value={data=='name'?name:phone} />
        ))}
      </datalist>
    </div>
      )
  }

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
         <input placeholder={place}
          style={style} tabIndex={id}
          onChange={set} type="text"
           name={name} />
       </div>
       )
     })

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
            <select className={styles2.select} name='val' {...props}>
             {values.map(({title,val}:Option):JSX.Element=>(
              <option key={val} value={val}>
                  {title}
              </option>
              ))}
            </select>
          </>
        )
      }