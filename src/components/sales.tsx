import {useState,ChangeEvent,FC} from 'react'
import {Link } from 'react-router-dom'
import { item1 } from './items'
import { sort,props,state1 } from '../types/state'
import {mass } from './items'
 export function Iphone({item,show}:props):JSX.Element|null {
const [state,setState]=useState<state1>({item:item})
const [value,setValue]=useState<string>('up')
const overOut=(item:string,i:number):void=>{
    const img:NodeListOf<HTMLImageElement>=document.querySelectorAll('#Iphone')
     img[i].src=item
    }
    const text:JSX.Element[]=state.item.map(({src,name,price,src1}:mass,i:number):JSX.Element=>{
        return <div className='item' key={i}>
            <img className='itemImg' id='Iphone'
             onMouseOver={():void=>overOut(src1,i)}
              onMouseOut={():void=>overOut(src,i)} src={src} alt="" />
            <div className='itemName' >
    <Link className='itemLink' 
    to={`about/?name=${name}`}>
        {name}
    </Link>
    </div>
    <div className='itemPrice'>{price}p</div>
        </div>
    }) 
if (show==1) {
    return <div>
       <div className='sel'>
        <button
         onClick={():void=>sort({state:state,value:value,set:setState})}>
            отсортировать
        </button> 
         <select className='select' value={value}
          onChange={(e:ChangeEvent<HTMLSelectElement>):void=>setValue(e.target.value)}>
            <option value="up">по возрастанию</option>
            <option value="down">по убыванию</option>
         </select>
         </div>
        <div className='main1'>{text}</div>
    </div>
    }
    return null
}
export function Mac({item,show}:props):JSX.Element|null {
const [state,setState]=useState<state1>({item:item})
const [value,setValue]=useState<string>('up')
const overOut=(item:string,i:number):void=>{
const img:NodeListOf<HTMLImageElement>=document.querySelectorAll('#Mac')
 img[i].src=item
}
const text:JSX.Element[]=state.item.map(({src,name,price,src1}:mass,i:number):JSX.Element=>{
    return <div className='item' key={i}>
        <img className='itemImgMac' id='Mac'
         onMouseOver={():void=>overOut(src1,i)}
          onMouseOut={():void=>overOut(src,i)} src={src} alt="" />
        <div className='itemNameMac' >
<Link className='itemLink' 
to={`about/?name=${name}`}>
    {name}
</Link>
</div>
<div className='itemPriceMac'>{price}p</div>
    </div>
}) 
if (show==1) {
    return <div > 
         <div className='sel'>
            <button 
            onClick={():void=>sort({state:state,value:value,set:setState})}>
                отсортировать
            </button> 
         <select className='select' value={value}
          onChange={(e:ChangeEvent<HTMLSelectElement>):void=>setValue(e.target.value)}>
            <option value="up">по возрастанию</option>
            <option value="down">по убыванию</option>
         </select>
         </div>
        <div className='main1'>{text}</div>
    </div>
    }
    return null
}
export  function Ipad({item,show}:props):JSX.Element|null {
const [state,setState]=useState<state1>({item:item})
const [value,setValue]=useState<string>('up')
const overOut=(item:string,i:number):void=>{
    const img:NodeListOf<HTMLImageElement>=document.querySelectorAll('#Ipad')
    img[i].src=item
    }
    const text:JSX.Element[]=state.item.map(({src,name,price,src1}:mass,i:number):JSX.Element=>{
        return <div className='item' key={i}>
            <img className='itemImg' id='Ipad'
             onMouseOver={():void=>overOut(src1,i)}
              onMouseOut={():void=>overOut(src,i)} src={src} alt="" />
            <div className='itemName' >
    <Link className='itemLink' 
    to={`about/?name=${name}`}>
        {name}
    </Link>
    </div>
    <div className='itemPrice'>{price}p</div>
        </div>
    }) 
if (show==1) {
    return <div>
        <div className='sel'>
            <button 
            onClick={():void=>sort({state:state,value:value,set:setState})}>
                отсортировать
            </button> 
         <select className='select' value={value}
          onChange={(e:ChangeEvent<HTMLSelectElement>):void=>setValue(e.target.value)}>
            <option value="up">по возрастанию</option>
            <option value="down">по убыванию</option>
         </select>
         </div>
        <div className='main1'>{text}</div>
    </div>
    }
    return null
}
 export  function Watch({item,show}:props):JSX.Element|null {
const [state,setState]=useState<state1>({item:item})
const [value,setValue]=useState<string>('up')
const overOut=(item:string,i:number):void=>{
    const img:NodeListOf<HTMLImageElement>=document.querySelectorAll('#Watch')
     img[i].src=item
    }
const text:JSX.Element[]=state.item.map(({src,name,price,src1}:mass,i:number):JSX.Element=>{
        return <div className='item' key={i}>
            <img className='itemImg' id='Watch'
             onMouseOver={():void=>overOut(src1,i)}
              onMouseOut={():void=>overOut(src,i)} src={src} alt="" />
            <div className='itemName' >
    <Link className='itemLink' 
    to={`about/?name=${name}`}>
        {name}
    </Link>
    </div>
    <div className='itemPrice'>{price}p</div>
        </div>
    }) 
if (show==1) {
    return <div >
        <div className='sel'>
        <button 
        onClick={():void=>sort({state:state,value:value,set:setState})}>
            отсортировать
        </button> 
         <select className='select' value={value} 
         onChange={(e:ChangeEvent<HTMLSelectElement>):void=>setValue(e.target.value)}>
            <option value="up">по возрастанию</option>
            <option value="down">по убыванию</option>
         </select>
         </div>
        <div className='main1'>{text}</div>
    </div>
    }
     return null
    
}
export const Search:FC<props>=({item,show}):JSX.Element|null=> {
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
    <div className={priceClass}>{price}p</div>
  </div>
 }) 
if (show==1) {
     return <div>
         <div className='main1'>{text}</div>
     </div>
     }
    return null
}