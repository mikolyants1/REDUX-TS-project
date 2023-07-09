import { useAppSelector } from '../types/state.js'
import {Link } from 'react-router-dom'

export default function Header():JSX.Element {
    const current:string=useAppSelector((store)=>store.phone.current)
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