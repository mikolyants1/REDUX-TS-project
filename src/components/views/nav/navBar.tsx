import {useEffect} from 'react'
import { NavLink,useOutletContext } from 'react-router-dom'
import {nameMass,mass1 } from '../../data/items'
import styles from '../../../style/main.module.css'
import { funcRoute } from '../../../types/state'

interface Link{
  isActive:boolean
}
export default function NavBar():JSX.Element{
const SetContext = useOutletContext<funcRoute>();
useEffect(():void=>SetContext('none'),[]);

const setClass = ({isActive}:Link):string => {
  const Class:string = isActive ? 'Active' : 'Pending';
  return styles[Class];
};

return (
      <div className={styles.main}>
        <nav className={styles.catalog}>
          {nameMass.map(({name}:mass1,i:number):JSX.Element=>(
            <div className={styles.cat1} key={i}>
              <NavLink to={`${name}`}
               className={setClass}>
                {name}
              </NavLink>
           </div>
          ))}
        </nav>
      </div>
     )
}
