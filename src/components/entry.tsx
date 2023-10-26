import {useEffect,useRef,KeyboardEvent,ChangeEvent} from 'react'
import { Link,Navigate,useOutletContext } from 'react-router-dom'
import {useAppSelector,LinkStyle1,DivEntry,style,comp,
func as Type,door,useReduce, setAction} from '../types/state.js'
import { bind, useActions ,getUser} from '../store/store.js'
import { User } from '../store/slice'
import { func } from '../App.js'

export default function Entry():JSX.Element {
    const [state,dispatch]=useReduce()
    const SetContext:func=useOutletContext()
    const user:User[]=useAppSelector(getUser)
    const entry=useRef<HTMLDivElement>(null!)
    const {add2,add3}:bind=useActions()
    useEffect(():void=>SetContext('home'),[])
    useEffect(():void=>{
    const height:number=state.error!==''?320:300
    entry.current.style.height=`${height}px`
    },[state.error])
    const change=(set:setAction)=>
     (e:ChangeEvent<HTMLInputElement>):void=>{
     dispatch({[e.target.name]:e.target.value})
      set(e.target.value)
    }
    const Block:comp[]=[
     {pl:'login',data:'name',set:add2},
     {pl:'password',data:'phone',set:add3}
    ]
    function press():void {
    const {name:n,phone:p}:door=state
    if (p!==''&&n!==''){
    const count:User[]=user.filter(
    (i:User):boolean=>i.phone==p&&i.name==n)
    count.length==0
    ? dispatch({error:'не найден'})
    : dispatch({auth:true})
    } else {
     dispatch({auth:false})
      }
    }
    const access=(e:KeyboardEvent<HTMLDivElement>):void=>{
      if (e.key==='Enter') press()
    }
    if (state.auth) {
      return <Navigate to='/' />
    }
    return (
            <div ref={entry} onKeyUp={access} className='login'>
              <div style={DivEntry}>
                Login
              </div>
               {Block.map(({data,pl,set}:comp,i:number):JSX.Element=>(
                <>
                 {set&&
                  <Login key={i} user={user} data={data}>
                    <input name={data} style={style} type="text"
                     placeholder={pl} list={data} tabIndex={i+1}
                     onChange={change(set)} />
                  </Login>
                 }
                </>
               ))}
              <div className='error'>
                 {state.error}
              </div>
              <div className='reg1'>
                <button className='but1'
                 tabIndex={3} onClick={press}>     
                    войти
                </button>
              </div> 
              <div className='if'>
                или
              </div>
              <div className='if' >
                <Link style={LinkStyle1} to='/regist'>
                  зарегестрироваться
                </Link>
              </div>
            </div>    
          )
}

interface props {
  user:User[],
  data:string,
  children:JSX.Element
}

function Login({user,data,children}:props):Type{
 return (
  <div className='info'>
     {children}
    <datalist id={data}>
      {user.map(({name,phone}:User,i:number):JSX.Element=>(
        <option key={i} value={data=='name'?name:phone} />
      ))}
    </datalist>
  </div>
    )
}
