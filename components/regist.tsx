import React from'react'
import { Link } from 'react-router-dom'
import { useAppDispatch,useAppSelector } from '../types/state.js'
import { add,User } from '../store/slice'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
interface state1{
  name:string|undefined,
  phone:string|undefined,
  
}
interface state2{
  src:string,
  error:string
}
export default function Regist():JSX.Element {
const [state,setState]=React.useState<state1>({name:'',phone:''})
const [state1,setState1]=React.useState<state2>({src:'/regist',error:''})
const user:User[]=useAppSelector((store)=>store.reduce.user)
const dispatch:Dispatch<AnyAction>=useAppDispatch()
function press():void {
    let con:number=0
    console.log(state.name)
    if (state.name!==''&&state.phone!=='') {
        for (let i = 0; i < user.length; i++) {
          if (user[i].phone==state.phone) {
            con++
          }
        }
        if (con>0) {
            setState1({error:'уже есть',src:'/regist'})
        }else{
          
         dispatch(add({name:state.name,phone:state.phone,user:user}));
         setState1({src:'/',error:state1.error})
        }
    }else{
        setState1({src:'/regist',error:state1.error})
    }
}
enum style{
  width='100%',
  height='100%',
  borderRadius='10px',
  border='1px solid grey',
  backgroundColor='rgb(241, 241, 241)',
}
    return <div>
         <div className='user'>
            <div style={{height:'15px'}}></div>
        <div className='info'>
            <input style={style}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setState({name:e.target.value,phone:state.phone})}
          type="text" />
          </div>
        <div className='info'>
            <input style={style}
             onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setState({phone:e.target.value,name:state.name})}
           type="text" />
           </div>
     <div className='reg2'>
        <button className='but1' onClick={press}>
        <Link to={`${state1.src}`} className='link1' >зарегестрироваться</Link>
        </button>
        </div> 
        <div className='error'>{state1.error}</div>
        </div>
         </div>
        
        

}