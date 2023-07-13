import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch,useAppSelector } from '../types/state.js'
import { add2,add3} from '../store/slice1'
import { User } from '../store/slice'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
interface state1{
    name:string,
    phone:string,
    
}
interface state2{
    src:string,
    error:string
}
export default function Entry():JSX.Element {
    const [state,setState]=React.useState<state1>({name:'',phone:''})
    const [state1,setState1]=React.useState<state2>({src:'/',error:''})
    const user:User[]=useAppSelector((store)=>store.reduce.user)
    const dispatch:Dispatch<AnyAction>=useAppDispatch()
    function change1(e:React.ChangeEvent<HTMLInputElement>):void {
        setState({name:e.target.value,phone:state.phone})
    }
    function change2(e:React.ChangeEvent<HTMLInputElement>):void {
        setState({phone:e.target.value,name:state.name})
    }
    function press():void {
        let con:number=0
        if (state.phone!==''&&state.name!=='') {
            for (let i = 0; i < user.length; i++) {
              if (user[i].phone==state.phone&&user[i].name==state.name) {
                con++
              }
            }
            if (con==0) {
                setState1({error:'не найден',src:state1.src})
            }else{
             
             setState1({src:'/home',error:state1.error})
            }
        }else{
            setState1({src:'/',error:state1.error})
        }
    }
    enum style{
        margin='100px auto',
        width='300px',
        height='200px',
        backgroundColor='rgb(210,210,210)',
        borderRadius='20px'
    }
    enum style1{
        width='100%',
        height='100%',
        borderRadius='10px',
        border='1px solid grey',
        backgroundColor='rgb(241, 241, 241)',
      }
    return <div>
         <div style={style}>
            <div style={{height:'15px'}}></div>
        <div className='info'>
            <input style={style1}  type="text"
         onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{change1(e);dispatch(add2(e.target.value))}} />
         </div>
        <div className='info'>
            <input style={style1}  type="text"
         onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{change2(e);dispatch(add3(e.target.value))}} />
         </div>
     <div className='reg1'>
        <button className='but1' onClick={press}>
        <Link to={`${state1.src}`} className='link1' >войти</Link>
        </button>
        </div> 
     <div className='error'>{state1.error}</div>
     <div className='if'>или</div>
     <div className='if' >
        <Link style={{textDecoration:'none'}} to='/regist'>зарегестрироваться</Link>
        </div>
         </div>
        
        
    </div>
}
