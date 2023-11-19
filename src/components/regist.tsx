import {useEffect,useRef,useCallback} from'react'
import { Navigate,useOutletContext } from 'react-router-dom'
import {useAppSelector,comp, door, useReduce,
 Evt, Key} from '../types/state.js'
import { User } from '../store/slice'
import { bind, useActions,getUser } from '../store/store.js'
import { func } from '../App.js'
import { Register } from './setting.js'
import { DivEntry } from './style.js'
type block=Omit<comp,'set'>

export default function Regist():JSX.Element {
const SetContext=useOutletContext<func>()
const [state,dispatch]=useReduce()
const Block:Omit<comp,'set'>[]=[
{pl:'login',data:'name'},
{pl:'password',data:'phone'}]
const user:User[]=useAppSelector(getUser)
const {add}:bind=useActions()
const regist=useRef<HTMLDivElement>(null!)
useEffect(():void=>SetContext('regist'),[])
useEffect(():void=>{
const height:number=state.error!==''?260:240
regist.current.style.height=`${height}px`
  },[state.error])
function press():void {
  const {name:n,phone:p}:door=state
  if (n!==''&&p!=='') {
  const count:User[]=user.filter(
  (i:User):boolean=>i.phone==p||i.name==n)
    if (count.length>0) {
     dispatch({error:'уже есть'})
      } else { 
     add({name:n,phone:p,obj:user})
     dispatch({auth:true})
      }
    } else {
     dispatch({auth:false})
    }
  }
  const access=(e:Key<HTMLDivElement>):void=>{
    if (e.key==='Enter') press()
  }
  const set=useCallback((e:Evt):void=>{
    dispatch({[e.target.name]:e.target.value})
   },[])
  if (state.auth) {
   return <Navigate to='/home' />
  }
  return (
        <div ref={regist}
         onKeyUp={access}
         className='user'>
          <div style={DivEntry}>
            Regist
          </div>
          {Block.map(({pl,data}:block,i:number):JSX.Element=>(
            <Register
             key={i}
             set={set}
             place={pl}
             name={data}
             id={i+1}
             />
           ))}
          <div className='error'>
            {state.error}
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
