import {useState,useEffect,useRef,useReducer}  from 'react'
import { SetURLSearchParams,useSearchParams,
useOutletContext } from 'react-router-dom'
import {useAppSelector,union2,union3,MakeArrFromRef,
obj,getCurrent,union1, getItem} from '../types/state.js';
import { item1,item2,item3,item4 } from './items.jsx';
import { Link,Navigate } from 'react-router-dom';
import { URLSearchParams } from 'url';
import { mass } from './items.js';
import { state } from '../store/slice1.js';
import { state as st} from '../store/slice.js';
import { useActions,bind,getById } from '../store/store.js';
import { func } from '../App.js';
import { ScrollBut } from './setting.js';
import { LinkStyle, style1, style2 } from './style.js';
type reduce=string|boolean|number
interface state2 {
   phone:state
}
interface state3 {
   reduce:st
}
interface styles {
   style1:string,
   style2:string,
   style3:string
}
interface action {
   type:string
}
interface className {
  one:string,
  two:string,
  three:string
}
interface datas{
  color:string,
  auth:boolean,
  jump:number
}
type action1=Record<string,reduce>

export default function About():JSX.Element {
   const [data,move]=useReducer(
   (x:datas,y:action1)=>({...x,...y}),
   {color:'black',auth:false,jump:360})
   const [className,setClassName]=useState<className>(
   {one:'aboutImg',two:'imgDiv',three:'aboutDiv'})
   const [state,dispatch]=useReducer(reducer,
   {style1:'rgb(240, 47, 156)',style2:'black',style3:'black'})
   const scrolls:string[]=['prev','next']
   const setContext:func=useOutletContext()
   const [page,setPage]=useState<number>(0)
   const black=useRef<HTMLDivElement>(null!)
   const white=useRef<HTMLDivElement>(null!)
   const grey=useRef<HTMLDivElement>(null!)
   const refObj:obj[]=MakeArrFromRef(black,grey,white)
   const [param]:[URLSearchParams,SetURLSearchParams]=useSearchParams();
   const id:string=useAppSelector(({phone}:state2)=>phone.id)
   const user:union1=useAppSelector((store:state3)=>getById(store,id))
   const {add1}:bind=useActions()
   const Name:union3=param.get("name")
   const item:union2=getItem([item1,item2,item3,item4],Name)
   if (!item) return <div>error</div>
   const {src,src1,src2,price}:union2=item
   const srcArr:string[]=[src,src1,src2]
   function reducer(state:styles,{type}:action):styles{
    move({color:type})
     switch (type) {
      case 'black':
      return {
        style1:'rgb(240, 47, 156)',
        style2:'black',
        style3:'black'
         };
      case 'grey':
      return {
        style1:'black',
        style2:'rgb(240, 47, 156)',
        style3:'black'
         };
      case 'white':
      return {
        style1:'black',
        style2:'black',
        style3:'rgb(240, 47, 156)'
         };
      default:
      return state;
      }
   } 
   const setBask=():void=>{
   id ? add1({
      id:user?.id,
      name:Name,
      price:price,
      src:src,
      color:data.color,
      bask:user?.bask
       })
   : move({auth:true})
   }
   useEffect(():void=>{
    setContext('none')
    if (item1.some(({name}:mass):boolean=>name==Name)){
    setClassName({
      one:'aboutImgMac',
      two:'imgDivMac',
      three:'aboutDivMac'
        })
    move({jump:450})
     }
   },[])
   useEffect(():void=>{
   const {style1,style2,style3}:styles=state
   const [b,g,w]:HTMLDivElement[]=getCurrent(refObj)
    b.style.border=`2px solid ${style1}`
    g.style.border=`2px solid ${style2}`
    w.style.border=`2px solid ${style3}`
   },[state])
   useEffect(():void=>{
   const {two}:className=className
   const {style}=document.querySelector(`.${two}`) as HTMLElement  
   style.transform=`translateX(${page*-data.jump}px)`
   },[page])
   if (data.auth){
     return <Navigate to='/home' />
   }
   return (
          <div style={style2}>
            <div className='AboutBack'>
              <Link style={LinkStyle} to='/'>
                &#8592;вернуться на главную
              </Link>
            </div>
            <div className={className.three}>
              <div className='scroll'>
                {scrolls.map((item:string):JSX.Element=>(
                   <ScrollBut
                    key={item}
                    set={setPage}
                    className={item}
                    />
                 ))}
              </div>
              <div className={className.two}>
                {srcArr.map((item:string,i:number):JSX.Element=>(
                  <div className={className.one} key={i}>
                    <img style={style1} src={`${item}`} alt="" />
                  </div>
                ))}
              </div>
              <div className='aboutName'>
                {Name}
              </div>  
              <div className='aboutPrice'>
                {price}p
              </div>  
              <div className='color'>
                <div className='color0'>
                  цвет
                </div>
                <div className='color1'>
                  {refObj.map(({name,ref}:obj,i:number):JSX.Element=>(
                  <div className={`${name}`} ref={ref} key={i}
                   onClick={()=>dispatch({type:name})} />
                  ))}
                </div>
              </div>
              <div className='divBut'>
                <button className='aboutBut' onClick={setBask}>
                   добавить в корзину
                </button>
              </div>
            </div> 
          </div>
   )
}
