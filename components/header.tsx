import { useAppSelector } from '../store/store'
import {Link } from 'react-router-dom'
import React from 'react'
interface state1{
  text:Array<string>
}
export default function Header():JSX.Element {
    const current:string[]=useAppSelector((store)=>store.phone.current)
    const [state,setState]=React.useState<state1>({text:[]})
    React.useEffect(()=>{
      for (let i = 0; i < current.length; i++) {
       if (typeof current[i]==`string`) {
        state.text.push(current[i])
       }
      }
      setState({text:state.text})     
    },[])
    return <div className='header' >    
             <div className='header1' >
               <div className='headerDiv'>
                <Link className='headerLink' to='/'>{state.text.at(-1)}</Link></div>
                <div className='headerName'>SmartShop</div>
                <div className='headerDiv'>
                <Link className='headerLink' to='/home/bask'>корзина</Link></div>
             </div>
    </div>
}