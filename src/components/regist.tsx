import {useState,ChangeEvent,useEffect,useRef} from'react'
import back from '../img/back.jpg'
import { Link } from 'react-router-dom'
import { useAppDispatch,useAppSelector,DivEntry,union,style } from '../types/state.js'
import { add,User } from '../store/slice'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { state } from '../store/slice'
interface state1{
  name:union,
  phone:union,
  
}
interface state2{
  src:string,
  error:string
}
type state3={
  reduce:state
}
export default function Regist():JSX.Element {
const [state,setState]=useState<state1>({name:'',phone:''})
const [state1,setState1]=useState<state2>({src:'/regist',error:''})
const user:User[]=useAppSelector((store:state3)=>store.reduce.user)
const dispatch:Dispatch<AnyAction>=useAppDispatch()
const regist=useRef<HTMLDivElement>(null!)
useEffect(():void=>{
const {style}=document.querySelector('body') as HTMLElement
style.background=`url(${back}) no-repeat`
style.backgroundSize='100vw 100vh'
  },[])
useEffect(():void=>{
const height:number=state1.error!==''?260:240
regist.current.style.height=`${height}px`
  },[state1.error])
const setName=(e:ChangeEvent<HTMLInputElement>):void=>{
  setState({name:e.target.value,phone:state.phone})
}
const setNumber=(e:ChangeEvent<HTMLInputElement>):void=>{
  setState({phone:e.target.value,name:state.name})
}
function press():void {
    let con:number=0
    if (state.name!==''&&state.phone!=='') {
        user.forEach(({phone,name}:User):void=>{
        if (phone==state.phone||name==state.name) con++
        })
        if (con>0) {
          setState1({error:'уже есть',src:'/regist'})
        }else{     
         dispatch(add({name:state.name,phone:state.phone,obj:user}));
         setState1({src:'/',error:state1.error})
        }
    }else{
        setState1({src:'/regist',error:state1.error})
    }
}
  return <div>
          <div ref={regist}
            className='user'>
              <div style={DivEntry}>
                Regist
              </div>
            <div className='info'>
             <input placeholder='login' style={style}
              onChange={setName} type="text" />
            </div>
            <div className='info'>
              <input placeholder='password' style={style}
               onChange={setNumber} type="text" />
            </div>
            <div className='error'>
                {state1.error}
              </div>
              <div className='reg1'>
               <button className='but1' onClick={press}>
                <Link to={`${state1.src}`} className='link1'>
                  зарегестрироваться
                </Link>
              </button>
             </div> 
           </div>
        </div>
        
        

}