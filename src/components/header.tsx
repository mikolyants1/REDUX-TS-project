import { useAppSelector } from '../types/state.js'
import {Link } from 'react-router-dom'
import { state } from '../store/slice1.js'
type state1={
  phone:state
}
export default function Header():JSX.Element {
    const current:string=useAppSelector(({phone:{current}}:state1)=>current)
    return <div className='header' >    
             <div className='header1' >
               <div className='headerDiv'>
                <Link className='headerLink' to='/'>{current}</Link></div>
                <div className='headerName'>SmartShop</div>
                <div className='headerDiv'>
                <Link className='headerLink' to='/home/bask'>корзина</Link></div>
             </div>
    </div>
}