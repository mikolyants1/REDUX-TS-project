import {useState,ChangeEvent,useEffect,
MouseEvent,FocusEvent,useReducer} from 'react'
import {Link} from 'react-router-dom'
import { item1, nameMass,item2,
item3,item4} from '../data/items'
import {state1,func,union2,union5,
union6, Key} from '../../types/state'
import { mass,mass1 } from '../data/items'
import { Select } from './helpers/setting'
import { style6 } from '../style/style'
import styles from '../../style/sale.module.css'
interface state{
  val:string,
  ser:string
}
interface action{
  [i:string]:string
}

export default function Catalog():func{
const url:string=String(window.location.pathname.split('/').at(-1))
const show:union5=nameMass.find(({name}:mass1)=>name==url)
if (show){
const [state,setState]=useState<state1>({item:show.mass})
const [param,dispatch]=useReducer(reduce,{val:'up',ser:''})
const item5:mass[]=[...item1,...item2,...item3,...item4]
useEffect(():void=>setState({item:show.mass}),[show])
const filter=():void=>{
 const val:string=param.ser.trim().toLocaleLowerCase()
 const list:mass[]=item5.filter((i:mass):union2=>{
  if (i.name.toLowerCase().indexOf(val)!==-1) return i
  })
 setState({item:list})
  }
const change=(e:ChangeEvent<union6>):void=>{
  dispatch({[e.target.name]:e.target.value})
  }
function reduce(prev:state,next:action):state{
  return {...prev,...next}
  }
const sort=():void=>{
const {item}:state1=state
const [mass1,obj]:[mass[],action]=[[],{}]
item.forEach(({price,name}:mass):void=>{
 obj[Number(price.split(' ').join(''))]=name
  })
const mass:string[]=Array.from(Object.values(obj))
if (param.val=='down') mass.reverse()
 for (const elem of mass) {
  item.forEach((x:mass):void=>{
   if (elem==x.name) mass1.push(x)
    })
  }
 setState({item:mass1})
  }
const imgChan=(item:string)=>
 (e:MouseEvent<HTMLImageElement>):void=>{
    e.currentTarget.src=item
  }
const keyHandler=(e:Key<HTMLInputElement>):void=>{
 if (e.key==='Enter') filter()
}
const inputEvent=(e:FocusEvent<HTMLInputElement>):void=>{
  e.target.style.backgroundColor=`rgb(${
   e.type=='blur'?'240,240,240':'200,200,200'
   })`
 }

const {val,ser}:state=param
const text:JSX.Element[]=state.item.map(
 ({src,name,price,src1}:mass):JSX.Element=>{
  const isMac:boolean=item1.some((i:mass)=>i.name==name)
  const text:string=isMac?'Mac':''
  const priceClass:string=`itemPrice${text}`
  const imgClass:string=`itemImg${text}`
  const nameClass:string=`itemName${text}`

   return  (
           <div className={styles.item} key={name}>
             <img className={styles[imgClass]} 
              onMouseOver={imgChan(src1)}
              onMouseOut={imgChan(src)}
              src={src} alt="" />
             <div className={styles[nameClass]}>
               <Link className={styles.itemLink}
                to={`/shop/about/?name=${name}`}>
                  {name}
               </Link>
             </div>
             <div className={styles[priceClass]}>
                {price}p
             </div>
           </div>
         )
      }) 
return <>
        <div className={styles.ser}>
          <input type="text" name='ser' 
           onKeyUp={keyHandler} onBlur={inputEvent}
           onFocus={inputEvent} onChange={change}
           value={ser} style={style6} />
          <button onClick={filter}
           className={styles.serBut}>
             search
          </button>
        </div>
        <div className={styles.sel}> 
          <Select value={val} onChange={change}>
            <button onClick={sort}>
               отсортировать
            </button> 
          </Select>
        </div>
        <div className={styles.main1}>
           {text}
        </div>
      </>
    }
  return null
}
