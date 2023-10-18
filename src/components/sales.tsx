import {useState,ChangeEvent,useEffect,MouseEvent,FocusEvent,KeyboardEvent,useReducer} from 'react'
import {Link} from 'react-router-dom'
import { item1, nameMass,item2,item3,item4} from './items'
import {state1,func,union,union2,union5,union6} from '../types/state'
import { mass,mass1 } from './items'
interface state{
  val:string,
  ser:string
}
interface action{
  [i:string]:string
}
export default function Catalog():func{
const url:union=window.location.pathname.split('/').at(-1)
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
const change=({target}:ChangeEvent<union6>):void=>{
  dispatch({[target.name]:target.value})
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
const keyHandler=(e:KeyboardEvent<HTMLInputElement>):void=>{
 if (e.key==='Enter') filter()
}
const inputEvent=(e:FocusEvent<HTMLInputElement>):void=>{
  e.target.style.backgroundColor=`rgb(${
   e.type=='blur'?'240,240,240':'200,200,200'
   })`
 }
  enum style {
    border=`1px solid grey`,
    width='93%',
    height='26px',
    textAlign='center',
    fontSize='20px',
    backgroundColor='rgb(240, 240, 240)',
}
const {val,ser}:state=param
let [imgClass,nameClass,priceClass]:string[]=['','','']
const text:JSX.Element[]=state.item.map((item:mass):JSX.Element=>{
  const {src,name,price,src1}:mass=item
  if (item1.some(({name:n}:mass):boolean=>n==name)) {
     imgClass='itemImgMac'
     nameClass='itemNameMac'
     priceClass='itemPriceMac'
    }else{
     imgClass='itemImg'
     nameClass='itemName'
     priceClass='itemPrice'
    }
   return  <div className='item' key={name}>
             <img className={imgClass} 
              onMouseOver={imgChan(src1)}
              onMouseOut={imgChan(src)}
              src={src} alt="" />
             <div className={nameClass}>
               <Link className='itemLink' 
                to={`/shop/about/?name=${name}`}>
                  {name}
               </Link>
             </div>
             <div className={priceClass}>
                {price}p
             </div>
           </div>
        }) 
return <>
        <div className='ser'>
          <input type="text" name='ser' 
           onKeyUp={keyHandler} onBlur={inputEvent}
           onFocus={inputEvent} onChange={change}
           value={ser} style={style} />
          <button onClick={filter} 
           className='serBut'>
             search
          </button>
        </div>
        <div className='sel'> 
          <Select value={val} onChange={change}>
            <button onClick={sort}>
               отсортировать
            </button> 
          </Select>
        </div>
        <div className='main1'>
           {text}
        </div>
      </>
    }
  return null
}
interface prop{
  value:string,
  onChange:(e:ChangeEvent<union6>)=>void,
  children:JSX.Element
}
interface Option{
  title:string,
  val:string
}
function Select(props:prop):JSX.Element{
  const values:Option[]=[
    {val:'up',title:'по возрастанию'},
    {val:'down',title:'по убыванию'},
  ]
  return (
    <>
      {props.children}
      <select className='select' name='val' {...props}>
       {values.map(({title,val}:Option):JSX.Element=>(
        <option key={val} value={val}>
            {title}
        </option>
        ))}
      </select>
    </>
  )
}