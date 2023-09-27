import {useState,ChangeEvent,useEffect,MouseEvent} from 'react'
import {Link} from 'react-router-dom'
import { item1, nameMass,item2,item3,item4} from './items'
import {state1,func, union,union2,union5,union6} from '../types/state'
import { mass,mass1 } from './items'
interface state2{
  value:string,
  ser:string
}
export function Catalog():func{
const url:union=window.location.pathname.split('/').at(-1)
const show:union5=nameMass.find(({name}:mass1)=>name==url)
if (show){
const [state,setState]=useState<state1>({item:show.mass})
const [param,setParam]=useState<state2>({value:'up',ser:''})
const item5:Array<mass>=[...item1,...item2,...item3,...item4]
const filter=():void=>{
  const val:string=param.ser.trim().toLocaleLowerCase()
  const list:mass[]=item5.filter((item:mass):union2=>{
  if (item.name.toLowerCase().indexOf(val)!==-1) return item
    })
 setState({item:list})
  }
const change=({target}:ChangeEvent<union6>):void=>{
setParam((prev:state2)=>({...prev,[target.name]:target.value}))
      }
useEffect(():void=>setState({item:show.mass}),[show])
const sort=():void=>{
const {item}:state1=state
let key:number
const [mass1,obj]:mass[][]&any=[[],{}]
item.forEach(({price,name}:mass):void=>{
  key=parseInt(price)
  obj[key]=name
  })
const mass:string[]=Array.from(Object.values(obj))
if (param.value=='down') mass.reverse()
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
  enum style {
    border=`1px solid grey`,
    width='93%',
    height='26px',
    textAlign='center',
    fontSize='20px',
    backgroundColor='rgb(240, 240, 240)',
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
          <input type="text" style={style} name='ser' 
           onChange={change} value={param.ser} />
          <button className='serBut' onClick={filter}>
            search
          </button>
        </div>
       <div className='sel'>
        <button
         onClick={sort}>
            отсортировать
        </button> 
         <select className='select' name='value'
           value={param.value} onChange={change}>
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
    </>
}
return null
}
