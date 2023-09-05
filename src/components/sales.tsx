import {useState,ChangeEvent,FC} from 'react'
import {Link } from 'react-router-dom'
import { item1 } from './items'
import {props,state1,func,Props,union} from '../types/state'
import {mass } from './items'
export function Catalog({item,show}:props):func {
const [state,setState]=useState<state1>({item:item})
const [value,setValue]=useState<string>('up')
const change=(e:ChangeEvent<HTMLSelectElement>):void=>{
  setValue(e.target.value)
        }
const sort=():void=>{
  const {item}:state1=state
  const [mass,mass1]:number[][]&Props[][]=[[],[]]
  item.forEach(({price}:Props):number=>mass.push(parseInt(price)))
  mass.sort((x:number,y:number):number=>value=='down'?y-x:x-y)
  for (let i:number = 0; i < mass.length; i++) {
  item.forEach((x:Props):void=>{
  if (mass[i]==parseInt(x.price)) mass1.push(x)
      })
     }
   setState({item:mass1})
  }
const overOut=(item:string,i:number,cl:union):void=>{
 const img:NodeListOf<HTMLImageElement>=document.querySelectorAll(`.${cl}`)
 img[i].src=item
  }
let [imgClass,nameClass,priceClass]:string[]=['','','']
const text:JSX.Element[]=state.item.map(({src,name,price,src1}:mass,i:number):JSX.Element=>{
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
               onMouseOver={():void=>overOut(src1,i,imgClass)}
               onMouseOut={():void=>overOut(src,i,imgClass)}
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
if (show==1) {
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

export const Search:FC<props>=({item,show}):func=> {
let [imgClass,nameClass,priceClass]:string[]=['','','']
const text:JSX.Element[]=item.map(({src,name,price}:mass,i:number):JSX.Element=>{
if (item1.some(({name:n}:mass):boolean=>n==name)) {
    imgClass='itemImgMac'
    nameClass='itemNameMac'
    priceClass='itemPriceMac'
    }else{
    imgClass='itemImg'
    nameClass='itemName'
    priceClass='itemPrice'
    }
return <div className='item' key={i}>
<img className={imgClass} src={src} alt="" />
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
if (show==1) {
  return <div>
           <div className='main1'>
            {text}
          </div>
        </div>
      }
    return null
}