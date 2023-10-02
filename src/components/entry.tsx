import {useState,ChangeEvent,useEffect,useRef} from 'react'
import { Link,Navigate,useOutletContext } from 'react-router-dom'
import {useAppSelector,LinkStyle,DivEntry,style} from '../types/state.js'
import { bind, useActions ,getUser} from '../store/store.js'
import { User } from '../store/slice'
import { func } from '../App.js'
interface state1{
    name:string,
    phone:string,
    
}
interface state2{
    auth:boolean,
    error:string
}

export default function Entry():JSX.Element {
    const [state,setState]=useState<state1>({name:'',phone:''})
    const [path,setPath]=useState<state2>({auth:false,error:''})
    const SetContext:func=useOutletContext()
    const user:User[]=useAppSelector(getUser)
    const entry=useRef<HTMLDivElement>(null!)
    const {add2,add3}:bind=useActions()
    useEffect(():void=>SetContext('home'),[])
    useEffect(():void=>{
    const height:number=path.error!==''?320:300
    entry.current.style.height=`${height}px`
    },[path.error])
    const change=({target}:ChangeEvent<HTMLInputElement>):void=>{
    setState((prev:state1)=>({...prev,[target.name]:target.value}))
    }
    const setName=(e:ChangeEvent<HTMLInputElement>):void=>{
      add2(e.target.value)
    }
    const setNum=(e:ChangeEvent<HTMLInputElement>):void=>{
      add3(e.target.value)
    }
    function press():void {
    let con:number=0
    if (state.phone!==''&&state.name!==''){
    user.forEach(({phone,name}:User):void=>{
    if (phone==state.phone&&name==state.name) con++
        })
    if (con==0){
     setPath((prev:state2)=>({...prev,error:'не найден'}))
      }else{
    setPath((prev:state2)=>({...prev,auth:true}))
        }
    }else{
    setPath((prev:state2)=>({...prev,auth:false}))
      }
    }
    if (path.auth) {
      return <Navigate to='/' />
    }
    return (
            <div ref={entry} className='login'>
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
                 {path.error}
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
            )
}

interface props {
  user:User[],
  data:string,
  chan:(e:ChangeEvent<HTMLInputElement>)=>void,
  set:(e:ChangeEvent<HTMLInputElement>)=>void,
  place:string
}

function Login({user,data,chan,set,place}:props):JSX.Element{
return (
  <div className='info'>
    <input name={data} style={style} type="text" placeholder={place}
     list={data} onChange={(e):void=>{chan(e);set(e)}} />
    <datalist id={data}>
      {user.map(({name,phone}:User,i:number):JSX.Element=>(
        <option key={i} value={data=='name'?name:phone} />
      ))}
    </datalist>
  </div>
  )
}
