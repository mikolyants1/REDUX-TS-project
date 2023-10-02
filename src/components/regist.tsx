import {useState,ChangeEvent,useEffect,useRef,Dispatch,SetStateAction} from'react'
import { Navigate,useOutletContext } from 'react-router-dom'
import {useAppSelector,DivEntry,union,style} from '../types/state.js'
import { User } from '../store/slice'
import { bind, useActions,getUser } from '../store/store.js'
import { func } from '../App.js'
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

export default function Regist():JSX.Element {
const SetContext:func=useOutletContext()
const [state,setState]=useState<state1>({name:'',phone:''})
const [path,setPath]=useState<state2>({auth:false,error:''})
const user:User[]=useAppSelector(getUser)
const {add}:bind=useActions()
const regist=useRef<HTMLDivElement>(null!)
useEffect(():void=>SetContext('regist'),[])
useEffect(():void=>{
const height:number=path.error!==''?260:240
regist.current.style.height=`${height}px`
  },[path.error])
function press():void {
    let con:number=0
    if (state.name!==''&&state.phone!=='') {
      user.forEach(({phone,name}:User):void=>{
      if (phone==state.phone||name==state.name) con++
        })
      if (con>0) {
       setPath((prev:state2)=>({...prev,error:'уже есть'}))
       }else{ 
       const obj:user={
       name:state.name,
       phone:state.phone,
       obj:user
        }   
        add(obj);
        setPath((prev:state2)=>({...prev,auth:true}))
      }
    }else{
      setPath((prev:state2)=>({...prev,auth:false}))
    }
}
 if (path.auth) {
   return <Navigate to='/home' />
 }
  return (
        <div ref={regist} className='user'>
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
            {path.error}
          </div>
          <div className='reg1'>
            <button className='but1' onClick={press}>
              зарегестрироваться
            </button>
          </div> 
        </div>
          )
  }
interface props {
 set:Dispatch<SetStateAction<state1>>,
 place:string,
 name:string
  }
function SetUser({set,place,name}:props):JSX.Element{
 const setData=({target}:ChangeEvent<HTMLInputElement>):void=>{
   set((prev:state1)=>({...prev,[target.name]:target.value}))
  }
return <div className='info'>
    <input placeholder={place} style={style}
     onChange={setData} type="text" name={name} />
   </div>
  }