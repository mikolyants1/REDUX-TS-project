
import { Link } from 'react-router-dom'
import { del} from '../store/slice'
import { useAppDispatch,useAppSelector } from '../types/state.js'
import { item1 } from './items.jsx'
import { User,bask } from '../store/slice'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { mass } from './main.js'
import { state } from '../store/slice1.js';
import { state as st } from '../store/slice.js';
type state2={
   phone:state
}
type state3={
   reduce:st
}
export default function Bask2():JSX.Element {
const id:string|undefined=useAppSelector(({phone}:state2)=>phone.id)
const user:User[]=useAppSelector(({reduce}:state3)=>reduce.user)
const dispatch:Dispatch<AnyAction>=useAppDispatch()
const user1:User|undefined=user.find(({phone}:User):boolean=>phone==id)
let [imgClass,divClass]:string[]=['','']
const list:JSX.Element[]|undefined=user1?.bask.map(({name,price,src}:bask,i:number):JSX.Element=>{
 if (item1.some(({name:n}:mass):boolean=>n==name)) {
  imgClass='baskImgMac'
  divClass='item2'
}else{
  imgClass='baskImg'
  divClass='item1'
}
   return <div key={i} className={divClass}>
          <img className={imgClass}  src={`../${src}`} alt="" />
        <div className='baskName' >{name}</div>
        <div className='baskPrice'>{price}</div>
        <div style={{width:'80%',margin:'auto'}}><button style={{width:'50%'}}>купить</button>
        <button style={{width:'50%'}}
         onClick={():void=>{dispatch(del({id:user1.id,index:i}))}}>
          удалить
        </button>
        </div>
      </div>
       })
      
       if (user1?.bask.length==0) {
        return <div className='baskLost'>
            корзина пока пуста
        </div>
       }else{
        return <div className='itemList'>
             {list}
             <div className='baskBack'>
            <Link style={{textDecoration:'none'}} to='/home'>вернуться к покупкам</Link>
        </div>
        </div>
       }
  
}