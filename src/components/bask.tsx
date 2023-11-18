
import { Link,useOutletContext } from 'react-router-dom'
import { useActions,bind,getById } from '../store/store.js'
import {useAppSelector,union, union1} from '../types/state.js'
import { item1 } from './items.jsx'
import { bask } from '../store/slice'
import { mass } from './items.js'
import { state } from '../store/slice1.js';
import { state as st } from '../store/slice.js';
import {useEffect} from 'react'
import { func } from '../App.js'
import { LinkStyle, style3, style4, style5 } from './style.js'
interface state2 {
   phone:state
}
interface state3 {
   reduce:st
}
type List=JSX.Element[]|undefined

export default function Bask2():JSX.Element {
const SetContext:func=useOutletContext()
const id:union=useAppSelector(({phone}:state2)=>phone.id)
const user:union1=useAppSelector((x:state3)=>getById(x,id))
const {del}:bind=useActions()
let [imgClass,divClass]:string[]=['','']
useEffect(():void=>SetContext('none'),[])
const remove=(i:number):void=>{
if (typeof user?.id=='number'&&user.bask){
 del({id:user?.id,index:i,bask:user.bask})
  }
}
const list:List=user?.bask.map(
  ({name,price,src,color}:bask,i:number):JSX.Element=>{ 
 if (item1.some(({name:n}:mass):boolean=>n==name)) {
  imgClass='baskImgMac'
  divClass='item2'
}else{
  imgClass='baskImg'
  divClass='item1'
}
   return <div key={i} className={divClass}>
            <img className={imgClass} src={`../${src}`} alt="" />
            <div className='baskName'>
              {name}
            </div>
            <div className='baskPrice'>
              {price}
            </div>
            <div className='baskColor'>
              <span style={style4}>
                Цвет:
              </span>
               {color?.toUpperCase()}
            </div>
            <div style={style5}>
              <button style={style3}
               onClick={()=>remove(i)}>
                удалить
              </button>
            </div>
          </div>
       })
 return <>
          {user?.bask.length==0?(
            <div className='baskLost'>
              корзина пока пуста
            </div>
            ):(
             <div className='itemList'>
                  {list}
                <div className='baskBack'>
                  <button className='buy'>
                     купить
                  </button>
                  <button className='back'>
                    <Link style={LinkStyle} to='/'>
                      вернуться к покупкам
                    </Link>
                  </button>
                </div>
              </div>
            )}
        </> 
}
