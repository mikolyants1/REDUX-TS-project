import {useState,ChangeEvent,useEffect,useRef} from 'react'
import back from '../img/back1.jpg'
import { Link } from 'react-router-dom'
import { useAppDispatch,useAppSelector,LinkStyle,DivEntry,style } from '../types/state.js'
import { add2,add3} from '../store/slice1'
import { User } from '../store/slice'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { state } from '../store/slice'
interface state1{
    name:string,
    phone:string,
    
}
interface state2{
    src:string,
    error:string
}
type state3={
    reduce:state
}
export default function Entry():JSX.Element {
    const [state,setState]=useState<state1>({name:'',phone:''})
    const [state1,setState1]=useState<state2>({src:'/',error:''})
    const user:User[]=useAppSelector(({reduce:{user}}:state3)=>user)
    const dispatch:Dispatch<AnyAction>=useAppDispatch()
    const entry=useRef<HTMLDivElement>(null!)
    useEffect(():void=>{
    const {style}=document.querySelector('body') as HTMLElement
    style.background=`url(${back}) no-repeat`
    style.backgroundSize='100vw 100vh'
    },[])
    useEffect(():void=>{
    const height:number=state1.error!==''?320:300
    entry.current.style.height=`${height}px`
    },[state1.error])
    const change1=(e:ChangeEvent<HTMLInputElement>):void=>{
        setState({name:e.target.value,phone:state.phone})
    }
    const change2=(e:ChangeEvent<HTMLInputElement>):void=>{
        setState({phone:e.target.value,name:state.name})
    }
    const setName=(e:ChangeEvent<HTMLInputElement>):void=>{
      dispatch(add2(e.target.value))
    }
    const setNum=(e:ChangeEvent<HTMLInputElement>):void=>{
      dispatch(add3(e.target.value))
    }
    function press():void {
    let con:number=0
    if (state.phone!==''&&state.name!=='') {
    user.forEach(({phone,name}:User):void=>{
    if (phone==state.phone&&name==state.name) con++
        })
    if (con==0) {
    setState1({error:'не найден',src:state1.src})
        }else{
    setState1({src:'/home',error:state1.error})
        }
        }else{
        setState1({src:'/',error:state1.error})
        }
    }
    return <div>
             <div ref={entry}
              className='login'>
              <div style={DivEntry}>
                Login
              </div>
               <div className='info'>
                <input style={style} type="text" placeholder='login'
                 list='dataName' onChange={(e):void=>{change1(e);setName(e)}} />
                <datalist id='dataName'>
                 {user.map(({name}:User,i:number):JSX.Element=>(
                  <option key={i} value={name}>{name}</option>
                 ))}
               </datalist>
              </div>
                <div className='info'>
                  <input style={style} type="text" placeholder='password'
                   list='dataPhone' onChange={(e):void=>{change2(e);setNum(e)}} />
                  <datalist id='dataPhone'>
                   {user.map(({phone}:User,i:number):JSX.Element=>(
                   <option key={i} value={phone}>{phone}</option>
                    ))}
                 </datalist>
               </div>
               <div className='error'>
                     {state1.error}
                   </div>
                 <div className='reg1'>
                  <button className='but1' onClick={press}>
                    <Link to={`${state1.src}`}
                      className='link1'>
                        войти
                    </Link>
                  </button>
                 </div> 
                   <div className='if'>
                      или
                   </div>
                   <div className='if' >
                    <Link style={LinkStyle} to='/regist'>
                      зарегестрироваться
                    </Link>
                  </div>
               </div>    
            </div>
}
