import { useAppSelector } from '../types/state.js'
import {Link,NavLink } from 'react-router-dom'
import { state } from '../store/slice1.js'
type state1={
  phone:state
}
interface LinkProp{
  isActive:boolean
}
export default function Header():JSX.Element {
    const current:string=useAppSelector(({phone:{current}}:state1)=>current)
    return <div className='header' >    
             <div className='header1'>
               <div className='headerDiv'>
                  <Link className='headerLink' to='/home'>
                    {!current?'Unknown':current}
                  </Link>
               </div>
               <div className='headerName'>
                  SmartShop
               </div>
               <div className='headerDiv'>
                  <NavLink to={!current?'/home':'bask'}
                   className={({isActive}:LinkProp)=>(!isActive?'headerLink':'ActivLink')}>
                    корзина
                  </NavLink>
               </div>
             </div>
           </div>
}