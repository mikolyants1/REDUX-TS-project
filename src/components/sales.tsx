import {useState,ChangeEvent,useEffect,MouseEvent} from 'react'
import {Link } from 'react-router-dom'
import { item1 } from './items'
import {props,state1,func} from '../types/state'
import {mass } from './items'
export function Catalog({show}:props):func{
if (show) {
const [state,setState]=useState<state1>({item:show})
const [value,setValue]=useState<string>('up')
useEffect(():void=>setState({item:show}),[show])
const change=(e:ChangeEvent<HTMLSelectElement>):void=>{
  setValue(e.target.value)
        }
const sort=():void=>{
const {item}:state1=state
let key:number
const [mass1,obj]:mass[][]&any=[[],{}]
item.forEach(({price,name}:mass):void=>{
  key=parseInt(price)
  obj[key]=name
  })
const mass:string[]=Array.from(Object.values(obj))
if (value=='down') mass.reverse()
for (let i:number = 0; i < mass.length; i++) {
  item.forEach((x:mass):void=>{
  if (mass[i]==x.name) mass1.push(x)
      })
     }
  setState({item:mass1})
  }
const imgChan=(item:string,e:MouseEvent<HTMLImageElement>):void=>{
  e.currentTarget.src=item
  }
const {item}:state1=state
let [imgClass,nameClass,priceClass]:string[]=['','','']
const text:JSX.Element[]=item.map((item:mass,i:number):JSX.Element=>{
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
   return  <div className='item' key={i}>
             <img className={imgClass} 
               onMouseOver={(e):void=>imgChan(src1,e)}
               onMouseOut={(e):void=>imgChan(src,e)}
               src={src} alt="" />
             <div className={nameClass}>
               <Link className='itemLink' 
                  to={`about/?name=${name}`}>
                  {name}
               </Link>
             </div>
             <div className={priceClass}>
                {price}p
             </div>
           </div>
        }) 
return <div>
       <div className='sel'>
        <button
         onClick={sort}>
            отсортировать
        </button> 
         <select className='select'
           value={value} onChange={change}>
            <option value="up">
              по возрастанию
            </option>
            <option value="down">
              по убыванию
            </option>
         </select>
         </div>
        <div className='main1'>
           {text}
        </div>
    </div>
    }
    return null
}
