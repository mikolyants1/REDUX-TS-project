import {useState,ChangeEvent,useEffect,useRef,KeyboardEvent} from 'react'
import { Link,Navigate,useOutletContext } from 'react-router-dom'
import {useAppSelector,LinkStyle1,DivEntry,style,comp,func as Type} from '../types/state.js'
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
    
    const Block:comp[]=[
     {pl:'login',data:'name',set:setName},
     {pl:'password',data:'phone',set:setNum}
    ]
    function press():void {
    let con:number=0
    const {name:n,phone:p}:state1=state
    if (p!==''&&n!==''){
    user.forEach(({phone,name}:User):void=>{
    if (phone==p&&name==n) con++
        })
    con==0
    ? setPath((prev:state2)=>({...prev,error:'не найден'}))
    : setPath((prev:state2)=>({...prev,auth:true}))
    }else{
    setPath((prev:state2)=>({...prev,auth:false}))
      }
    }
    const access=(e:KeyboardEvent<HTMLDivElement>):void=>{
      if (e.key==='Enter') press()
    }
    if (path.auth) {
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
                     onChange={(e)=>{change(e);set(e)}} />
                  </Login>
                 }
                </>
               ))}
              <div className='error'>
                 {path.error}
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

function Login(props:props):Type{
 const {user,data,children}:props=props
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
