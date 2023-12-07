import { User } from "../../../store/slices/slice"
import styles from '../../../style/entry.module.css'

interface LoginProp {
    user:User[],
    data:string,
    children:JSX.Element
  }
  
export function Login({user,data,children}:LoginProp):JSX.Element{
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