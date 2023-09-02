
import { Link } from 'react-router-dom'
import { del} from '../store/slice'
import { useAppDispatch,useAppSelector,LinkStyle,union,union1 } from '../types/state.js'
import { item1 } from './items.jsx'
import { User,bask } from '../store/slice'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
import { mass } from './items.js'
import { state } from '../store/slice1.js';
import { state as st } from '../store/slice.js';
interface state2 {
   phone:state
}
interface state3 {
   reduce:st
}
type List=JSX.Element[]|undefined
type obj={
  id:number,
  index:number
}
export default function Bask2():JSX.Element {
const id:union=useAppSelector(({phone}:state2)=>phone.id)
const user:User[]=useAppSelector(({reduce}:state3)=>reduce.user)
const dispatch:Dispatch<AnyAction>=useAppDispatch()
const user1:union1=user.find(({phone}:User):boolean=>phone==id)
let [imgClass,divClass]:string[]=['','']
const remove=(i:number):void=>{
if (typeof user1?.id!=='undefined'){
 const obj:obj={
  id:user1.id,
  index:i
     }
 dispatch(del(obj))
    }
}
enum style1{
  width='50%',
  height='25px',
}
enum style2 {
  color='grey'
}
enum style3 {
  width='80%',
  margin='auto'
}
const list:List=user1?.bask.map(({name,price,src,color}:bask,i:number):JSX.Element=>{
 if (item1.some(({name:n}:mass):boolean=>n==name)) {
  imgClass='baskImgMac'
  divClass='item2'
}else{
  imgClass='baskImg'
  divClass='item1'
}
   return <div key={i} className={divClass}>
            <img className={imgClass}  src={`../${src}`} alt="" />
            <div className='baskName'>
              {name}
            </div>
            <div className='baskPrice'>
              {price}
            </div>
            <div className='baskColor'>
              <span style={style2}>
                Цвет:
              </span>
               {color}
            </div>
              <div style={style3}>
                <button style={style1}>
                   купить
                </button>
                <button style={style1}
                 onClick={():void=>remove(i)}>
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
                    <Link style={LinkStyle} to='/home'>
                      вернуться к покупкам
                    </Link>
                  </div>
               </div>
           }
}