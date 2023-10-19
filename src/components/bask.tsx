
import { Link,useOutletContext } from 'react-router-dom'
import { useActions,bind,getById } from '../store/store.js'
import {useAppSelector,LinkStyle,union,union1} from '../types/state.js'
import { item1 } from './items.jsx'
import { bask } from '../store/slice'
import { mass } from './items.js'
import { state } from '../store/slice1.js';
import { state as st } from '../store/slice.js';
import {useEffect} from 'react'
import { func } from '../App.js'
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
if (typeof user?.id!=='undefined'&&typeof user.bask!=='undefined'){
 del({id:user.id,index:i,bask:user.bask})
  }
}
enum style1{
  width='70%',
  height='25px',
  borderRadius='5px',
  border='1px solid grey'
}
enum style2 {
  color='grey'
}
enum style3 {
  width='80%',
  margin='auto',
  display='flex',
  justifyContent='center'
}
const list:List=user?.bask.map((item:bask,i:number):JSX.Element=>{
  const {name,price,src,color}:bask=item
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
              <span style={style2}>
                Цвет:
              </span>
               {color?.toUpperCase()}
            </div>
            <div style={style3}>
              <button style={style1}
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
