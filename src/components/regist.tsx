import {useState,ChangeEvent,useEffect,useRef,Dispatch,SetStateAction} from'react'
import back from '../img/back.jpg'
import { Navigate } from 'react-router-dom'
import {useAppSelector,DivEntry,union,style } from '../types/state.js'
import { User } from '../store/slice'
import { state } from '../store/slice'
import { bind, useActions } from '../store/store.js'
interface state1{
  name:union,
  phone:union,
  
}
interface state2{
  auth:boolean,
  error:string
}
interface user {
  name:union,
  phone:union,
  obj:User[]
}
type state3={
  reduce:state
}
export default function Regist():JSX.Element {
const [state,setState]=useState<state1>({name:'',phone:''})
const [state1,setState1]=useState<state2>({auth:false,error:''})
const user:User[]=useAppSelector((store:state3)=>store.reduce.user)
const {add}:bind=useActions()
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
function press():void {
    let con:number=0
    if (state.name!==''&&state.phone!=='') {
      user.forEach(({phone,name}:User):void=>{
      if (phone==state.phone||name==state.name) con++
        })
        if (con>0) {
        setState1({auth:false,error:'уже есть'})
        }else{ 
         const obj:user={
          name:state.name,
          phone:state.phone,
          obj:user
          }   
         add(obj);
         setState1((prev:state2):state2=>({...prev,auth:true}))
        }
    }else{
        setState1((prev:state2):state2=>({...prev,auth:false}))
    }
}
 if (state1.auth) {
   return <Navigate to='/home' />
 }
  return <div>
          <div ref={regist}
            className='user'>
              <div style={DivEntry}>
                Regist
              </div>
              <SetUser
               set={setState}
               place='login'
               name='name'
               />
              <SetUser
               set={setState}
               place='password'
               name='phone'
               />
            <div className='error'>
                {state1.error}
              </div>
              <div className='reg1'>
               <button className='but1' onClick={press}>
                  зарегестрироваться
              </button>
             </div> 
           </div>
        </div>
  }
interface props {
 set:Dispatch<SetStateAction<state1>>,
 place:string,
 name:string
  }
function SetUser({set,place,name}:props):JSX.Element{
const setData=({target}:ChangeEvent<HTMLInputElement>):void=>{
set((prev:state1):state1=>({...prev,[target.name]:target.value}))
    }
return <div className='info'>
    <input name={name} placeholder={place}
     style={style} onChange={setData} type="text" />
   </div>
  }