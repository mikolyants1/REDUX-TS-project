import {memo} from 'react'
import styles from '../../../../style/entry.module.css'
import { Link } from 'react-router-dom'
import { LinkStyle1 } from '../../../style/style'

interface props {
  error:string,
  press:()=>void
}

function EntryLink({press,error}:props):JSX.Element {
  return (
  <>
    <div className={styles.error}>
      {error}
    </div>
    <div className={styles.reg1}>
      <button className={styles.but1}
       tabIndex={3} onClick={press}>     
         войти
      </button>
    </div> 
    <div className={styles.if}>
      или
    </div>
    <div className={styles.if} >
      <Link style={LinkStyle1} to='/regist'>
        зарегестрироваться
      </Link>
    </div>
  </>
  )
};

export default memo(EntryLink)