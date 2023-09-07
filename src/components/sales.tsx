import {useState,ChangeEvent,FC,useEffect} from 'react'
import {Link } from 'react-router-dom'
import { item1 } from './items'
import {props,state1,func,union} from '../types/state'
import {mass } from './items'
export function Catalog({show}:props):func{
if (show) {
const [state,setState]=useState<state1>({item:show})
const [value,setValue]=useState<string>('up')
useEffect(():void=>{setState({item:show})},[show])
const change=(e:ChangeEvent<HTMLSelectElement>):void=>{
  setValue(e.target.value)
        }
const sort=():void=>{
  const {item}:state1=state
  const [mass,mass1]:number[][]&mass[][]=[[],[]]
  item.forEach(({price}:mass):number=>mass.push(parseInt(price)))
  mass.sort((x:number,y:number):number=>value=='down'?y-x:x-y)
  for (let i:number = 0; i < mass.length; i++) {
  item.forEach((x:mass):void=>{
  if (mass[i]==parseInt(x.price)) mass1.push(x)
      })
     }
  setState({item:mass1})
  }
const imgChan=(item:string,i:number,cl:union):void=>{
const img:NodeListOf<HTMLImageElement>=document.querySelectorAll(`.${cl}`)
img[i].src=item
  }
let [imgClass,nameClass,priceClass]:string[]=['','','']
const text:JSX.Element[]=state.item.map((item:mass,i:number):JSX.Element=>{
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
               onMouseOver={():void=>imgChan(src1,i,imgClass)}
               onMouseOut={():void=>imgChan(src,i,imgClass)}
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

export const Search:FC<props>=({show}):func=>{
if (show) {
let [imgClass,nameClass,priceClass]:string[]=['','','']
const text:JSX.Element[]=show.map((item:mass,i:number):JSX.Element=>{
const {name,src,price}:mass=item
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
  return <div>
           <div className='main1'>
            {text}
          </div>
        </div>
      }
    return null
}