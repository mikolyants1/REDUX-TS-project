import React from 'react'
import {Link } from 'react-router-dom'
import { item1 } from './items'
import { bask } from '../store/slice'
import { sort,props,state1 } from '../types/state'
import { mass } from './main'
 export function Iphone({item,show}:props):JSX.Element|null {
const [state,setState]=React.useState<state1>({item:item})
const [value,setValue]=React.useState<string>('up')
   const text:JSX.Element[]=state.item.map(({src,name,price}:bask,index:number)=>{
    return <div className='item' key={index}>
        <img className='itemImg'  src={src} alt="" />
        <div className='itemName' >
<Link className='itemLink' 
to={`about/?name=${name}`}>{name}</Link></div>
        <div className='itemPrice'>{price}p</div>
    </div>
}) 
    if (show==1) {
    return <div>
       <div className='sel'>
            <button onClick={()=>sort({state:state,value:value,set:setState})}>отсортировать</button> 
         <select className='select' value={value}
          onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setValue(e.target.value)}>
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
const [state,setState]=React.useState<state1>({item:item})
const [value,setValue]=React.useState<string>('up')
const text:JSX.Element[]=state.item.map(({src,name,price}:bask,index:number)=>{
    return <div className='item' key={index}>
        <img className='itemImgMac'  src={src} alt="" />
        <div className='itemNameMac' >
<Link className='itemLink' 
to={`about/?name=${name}`}>{name}</Link></div>
        <div className='itemPriceMac'>{price}p</div>
    </div>
}) 
    if (show==1) {
    return <div > 
         <div className='sel'>
            <button onClick={()=>sort({state:state,value:value,set:setState})}>отсортировать</button> 
         <select className='select' value={value}
          onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setValue(e.target.value)}>
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
const [state,setState]=React.useState<state1>({item:item})
const [value,setValue]=React.useState<string>('up')
   const text:JSX.Element[]=state.item.map(({src,name,price}:bask,index:number)=>{
    return <div className='item' key={index}>
        <img className='itemImg' src={src} alt="" />
        <div className='itemName'>
<Link className='itemLink'
 to={`about/?name=${name}`}>{name}</Link></div>
        <div className='itemPrice'>{price}p</div>
    </div>
}) 
    if (show==1) {
    return <div>
        <div className='sel'>
            <button onClick={()=>sort({state:state,value:value,set:setState})}>отсортировать</button> 
         <select className='select' value={value}
          onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setValue(e.target.value)}>
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
const [state,setState]=React.useState<state1>({item:item})
const [value,setValue]=React.useState<string>('up')
const  text:JSX.Element[]=state.item.map(({src,name,price}:bask,index:number)=>{
    return <div className='item' key={index}>
       <img className='itemImg' src={src} alt="" />
    <div className='itemName'>
<Link className='itemLink'
to={`about/?name=${name}`}>{name}</Link></div>
    <div className='itemPrice'>{price}p</div>
    </div>
}) 

    if (show==1) {
    return <div >
        <div className='sel'>
        <button onClick={()=>sort({state:state,value:value,set:setState})}>отсортировать</button> 
         <select className='select' value={value} 
         onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setValue(e.target.value)}>
            <option value="up">по возрастанию</option>
            <option value="down">по убыванию</option>
         </select>
         </div>
        <div className='main1'>{text}</div>
    </div>
    }
     return null
    
}
export const Search:React.FC<props>=({item,show}):JSX.Element|null=> {
 let [imgClass,nameClass,priceClass]:string[]=['','','']
    const text:JSX.Element[]=item.map(({src,name,price}:bask,index:number)=>{
        if (item1.some(({name}:mass)=>name==name)) {
            imgClass='itemImgMac'
            nameClass='itemNameMac'
            priceClass='itemPriceMac'
         }else{
             imgClass='itemImg'
             nameClass='itemName'
             priceClass='itemPrice'
         }
     return <div className='item' key={index}>
         <img className={imgClass} src={src} alt="" />
         <div className={nameClass}>
 <Link className='itemLink'
  to={`about/?name=${name}`}>{name}
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