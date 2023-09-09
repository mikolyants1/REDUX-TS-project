import {useState,ChangeEvent,useEffect,useRef,FC} from 'react'
import back from '../img/back1.jpg'
import { Link,Navigate } from 'react-router-dom'
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
    auth:boolean,
    error:string
}
type state3={
    reduce:state
}
export default function Entry():JSX.Element {
    const [state,setState]=useState<state1>({name:'',phone:''})
    const [state1,setState1]=useState<state2>({auth:false,error:''})
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
    const change=({target}:ChangeEvent<HTMLInputElement>):void=>{
    setState((prev:state1):state1=>({...prev,[target.name]:target.value}))
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
    setState1((prev:state2):state2=>({...prev,error:'не найден'}))
        }else{
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
             <div ref={entry}
              className='login'>
              <div style={DivEntry}>
                Login
              </div>
              <Login
               user={user}
               data='name'
               chan={change}
               set={setName}
               place='login'
              />
              <Login
               user={user}
               data='phone'
               chan={change}
               set={setNum}
               place='password'
              />
               <div className='error'>
                     {state1.error}
                   </div>
                 <div className='reg1'>
                  <button className='but1' onClick={press}>     
                        войти
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
interface props {
  user:User[],
  data:string,
  chan:(e:ChangeEvent<HTMLInputElement>)=>void,
  set:(e:ChangeEvent<HTMLInputElement>)=>void,
  place:string
}

const Login:FC<props>=({user,data,chan,set,place}):JSX.Element=>{
const list:JSX.Element[]=user.map(({name,phone}:User,i:number):JSX.Element=>{
if (data=='name') return <option key={i} value={name}></option>
else return <option key={i} value={phone}></option>
})
return <div className='info'>
     <input name={data} style={style} type="text" placeholder={place}
      list={data} onChange={(e):void=>{chan(e);set(e)}} />
    <datalist id={data}>
       {list}
    </datalist>
  </div>
}
