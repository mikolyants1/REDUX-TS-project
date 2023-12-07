import { useAppSelector } from '../../types/state.js'
import {Link,NavLink } from 'react-router-dom'
import { state } from '../../store/slices/slice1.js'
import styles from '../../style/header.module.css'
type state1={
  phone:state
}
interface LinkProp{
  isActive:boolean
}
export default function Header():JSX.Element {
  const current:string=useAppSelector(({phone}:state1)=>phone.current)
    return <div className={styles.header}>    
             <div className={styles.header1}>
               <div className={styles.headerDiv}>
                 <Link className={styles.headerLink} to='/home'>
                   {!current?'Unknown':current}
                 </Link>
               </div>
               <div className={styles.headerName}>
                  SmartShop
               </div>
               <div className={styles.headerDiv}>
                  <NavLink to={!current?'/home':'bask'} 
                   className={({isActive}:LinkProp):string=>{
                   return styles[isActive?'ActivLink':'headerLink']}}>
                    корзина
                  </NavLink>
               </div>
             </div>
           </div>
}