import {useState,useEffect,useRef,useReducer,MutableRefObject,Dispatch,SetStateAction}  from 'react'
import { SetURLSearchParams,useSearchParams } from 'react-router-dom'
import { add1 ,User} from '../store/slice.js';
import { useAppDispatch,useAppSelector,LinkStyle,union2,union1,union3 } from '../types/state.js';
import { item1,item2,item3,item4 } from './items.jsx';
import { Link } from 'react-router-dom';
import { AnyAction, Dispatch as Dis } from '@reduxjs/toolkit';
import { URLSearchParams } from 'url';
import { mass } from './items.js';
import { state } from '../store/slice1.js';
import { state as st,pay1} from '../store/slice.js';
import img from '../img/arr.png'
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
   type:number
}
export default function About():JSX.Element {
   const [cless,setCless]=useState<string>('aboutImg')
   const [cless1,setCless1]=useState<string>('imgDiv')
   const [cless2,setCless2]=useState<string>('aboutDiv')
   const [color,setColor]=useState<string>('Black')
   const [state1,move]=useReducer(reducer,{style1:'rgb(240, 47, 156)',style2:'black',style3:'black'})
   const [page,setPage]=useState<number>(0)
   const [jump,setJump]=useState<number>(360)
   const black=useRef<HTMLDivElement>(null!)
   const white=useRef<HTMLDivElement>(null!)
   const grey=useRef<HTMLDivElement>(null!)
   const [searchParams]:[URLSearchParams,SetURLSearchParams]=useSearchParams();
   const id:string=useAppSelector(({phone:{id}}:state2)=>id)
   const user:User[]=useAppSelector(({reduce:{user}}:state3)=>user)
   const user1:union1=user.find(({phone}:User):boolean=>phone==id)
   const dispatch:Dis<AnyAction>=useAppDispatch()
   const Name:union3=searchParams.get("name")
   const item:union2=item1.concat(item2,item3,item4).find(({name}:mass):boolean=>name==Name)
   if (!item) return <div>...</div>
   const {src,src1,src2,price}:union2=item
   function reducer(state:styles,{type}:action):styles{
   switch (type) {
      case 0:
      setColor('Black')
      return {style1:'rgb(240, 47, 156)',style2:'black',style3:'black'}
      break;
      case 1:
      setColor('Grey')
      return {style1:'black',style2:'rgb(240, 47, 156)',style3:'black'}
      break;
      case 2:
      setColor('White')
      return {style1:'black',style2:'black',style3:'rgb(240, 47, 156)'}
      break;
      default:
      return state
      break;
      }
   } 
   const setBask=():void=>{
    const obj:pay1={
      id:user1?.id,
      name:Name,
      price:price,
      src:src,
      color:color
    }
    dispatch(add1(obj))
   }
   enum style {
   width='90%',
   marginLeft='5%',
   height='100%'
   }
   enum style1 {
   width='100%',
   height='80%',
   marginTop='10%',
   marginLeft='10%',
   borderRadius='50%'
   }
   enum style2 {
   width='100%'
   }
   useEffect(():void=>{
   if (item1.some(({name}:mass):boolean=>name==Name)){
      setCless('aboutImgMac')
      setCless1('imgDivMac')
      setCless2('aboutDivMac')
      setJump(450)
     }
   },[])
   useEffect(():void=>{
   const [{current:{style:b}},{current:{style:g}},{current:{style:w}}]
   :MutableRefObject<HTMLDivElement>[]=[black,grey,white]
   const {style1,style2,style3}:styles=state1
    b.border=`2px solid ${style1}`
    g.border=`2px solid ${style2}`
    w.border=`2px solid ${style3}`
   },[state1])
   useEffect(():void=>{
   const {style}=document.querySelector(`.${cless1}`) as HTMLElement  
   style.transform=`translateX(${page*-jump}px)`
   },[page])
   return <div style={style2}>
            <div className={cless2}>
              <div className='scroll'>
                <ScrollBut 
                 set={setPage}
                 className='prev'
                 style={style1}
                 />
                <ScrollBut 
                 set={setPage}
                 className='next'
                 style={style1}
                 />
              </div>
                <div className={cless1}>
                  <div className={cless}>
                    <img style={style} src={`${src}`} alt="" />
                  </div>
                  <div className={cless}>
                    <img style={style} src={`${src1}`} alt="" />
                  </div>
                  <div className={cless}> 
                    <img style={style} src={`${src2}`} alt="" />
                  </div>
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
                   <div className='black' ref={black}
                     onClick={():void=>move({type:0})}>
                   </div>
                   <div className='grey' ref={grey}
                     onClick={():void=>move({type:1})}>
                   </div>
                   <div className='white' ref={white}
                     onClick={():void=>move({type:2})}>
                   </div>
                 </div>
               </div>
            <div className='divBut'>
             <button className='aboutBut'
              onClick={setBask}>
               добавить в корзину
             </button>
          </div>
          <div className='baskBack'>
           <Link style={LinkStyle} to='/home'>
              вернуться на главную
           </Link>
         </div>
      </div> 
   </div>
}
type style={
  width:string,
  height:string,
  marginTop:string,
  marginLeft:string,
  borderRadius:string
  }
interface props {
  set:Dispatch<SetStateAction<number>>,
  className:string,
  style:style
}
function ScrollBut({set,className,style}:props):JSX.Element{
const press=():void=>{
  if (className=='next') {
  set((x:number):number=>x==2?0:x+1)
  }else{
  set((x:number):number=>x==0?2:x-1)
  }
}
  return <>
  <button onClick={press}
    className={className}>
    <img style={style} src={img} alt="" />
  </button>
  </>

}