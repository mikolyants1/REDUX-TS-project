import { useAppSelector } from '../../../types/state.js'
import {Link,NavLink } from 'react-router-dom'
import styles from '../../../style/header.module.css'
import { getCurrent } from '../../../store/store.js'

interface LinkProp{
  isActive:boolean
}
export default function Header():JSX.Element {
  const current:string = useAppSelector(getCurrent);
    return (
      <header className={styles.header}>    
        <div className={styles.header1}>
          <div className={styles.headerDiv}>
            <Link className={styles.headerLink} to='/home'>
              {!current ? 'Unknown' : current}
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
      </header>
    );
};