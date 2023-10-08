import {useState,ChangeEvent,useEffect,useRef,Dispatch,SetStateAction,KeyboardEvent} from'react'
import { Navigate,useOutletContext } from 'react-router-dom'
import {useAppSelector,DivEntry,union,style,component} from '../types/state.js'
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
export default function Regist():JSX.Element {
const SetContext:func=useOutletContext()
const [state,setState]=useState<state1>({name:'',phone:''})
const [path,setPath]=useState<state2>({auth:false,error:''})
const Block:component[]=[
  {place:'login',data:'name'},
  {place:'password',data:'phone'}
    ]
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
    const {name:n,phone:p}:state1=state
    if (n!==''&&p!=='') {
     user.forEach(({phone,name}:User):void=>{
      if (phone==p||name==n) con++
      })
    if (con>0) {
     setPath((prev:state2)=>({...prev,error:'уже есть'}))
      } else { 
     add({name:n,phone:p,obj:user})
     setPath((prev:state2)=>({...prev,auth:true}))
      }
    } else {
     setPath((prev:state2)=>({...prev,auth:false}))
    }
  }
  const access=(e:KeyboardEvent<HTMLDivElement>):void=>{
    if (e.key==='Enter') press()
  }
  if (path.auth) {
   return <Navigate to='/home' />
  }
  return (
        <div ref={regist} onKeyUp={access} className='user'>
          <div style={DivEntry}>
            Regist
          </div>
          {Block.map(({place,data}:component,i:number):JSX.Element=>(
            <SetUser
             key={i}
             set={setState}
             place={place}
             name={data}
             id={i+1}
             />
           ))}
          <div className='error'>
            {path.error}
          </div>
          <div className='reg1'>
            <button className='but1' 
             tabIndex={3} onClick={press}>
              зарегестрироваться
            </button>
          </div> 
        </div>
          )
  }
interface props {
 set:Dispatch<SetStateAction<state1>>,
 place:string,
 name:string,
 id:number
  }
function SetUser({set,place,name,id}:props):JSX.Element{
 const setData=({target}:ChangeEvent<HTMLInputElement>):void=>{
   set((prev:state1)=>({...prev,[target.name]:target.value}))
  }
return (
    <div className='info'>
      <input placeholder={place} style={style} tabIndex={id}
       onChange={setData} type="text" name={name} />
    </div>
    )
  }