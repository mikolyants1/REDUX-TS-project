import {useState,useEffect,useRef,useReducer,MutableRefObject}  from 'react'
import { SetURLSearchParams,useSearchParams } from 'react-router-dom'
import { add1 } from '../store/slice.js';
import { useAppDispatch,useAppSelector } from '../types/state.js';
import { item1,item2,item3,item4 } from './items.jsx';
import { User} from '../store/slice.js';
import { Link } from 'react-router-dom';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { URLSearchParams } from 'url';
import { mass } from './items.js';
import { state } from '../store/slice1.js';
import { state as st } from '../store/slice.js';
type state2={
   phone:state
}
type state3={
   reduce:st
}
type styles={
   style1:string,
   style2:string,
   style3:string
}
type action={
   type:number
}
export default function About():JSX.Element {
   const img:string='https://zabavnikus.ru/wp-content/uploads/4/6/d/46db6b99ec911f6e90a2b62e43c53ccd.png'
   const [cless,setCless]=useState<string>('aboutImg')
   const [cless1,setCless1]=useState<string>('imgDiv')
   const [cless2,setCless2]=useState<string>('aboutDiv')
   const [color,setColor]=useState<string>('black')
   const [state1,move]=useReducer(reducer,{style1:'rgb(240, 47, 156)',style2:'black',style3:'black'})
   const [page,setPage]=useState<number>(0)
   const [jump,setJump]=useState<number>(360)
   const black=useRef<HTMLDivElement>(null!)
   const white=useRef<HTMLDivElement>(null!)
   const grey=useRef<HTMLDivElement>(null!)
   const [searchParams]:[URLSearchParams,SetURLSearchParams]=useSearchParams();
   const id:string=useAppSelector(({phone:{id}}:state2)=>id)
   const user:User[]=useAppSelector(({reduce:{user}}:state3)=>user)
   const user1:User|undefined=user.find(({phone}:User):boolean=>phone==id)
   const dispatch:Dispatch<AnyAction>=useAppDispatch()
   const Name:string|null=searchParams.get("name")
   const item:mass|undefined=item1.concat(item2,item3,item4).find(({name}:mass):boolean=>name==Name)
   const src:string|undefined=item?.src
   const src1:string|undefined=item?.src1
   const src2:string|undefined=item?.src2
   const price:string|undefined=item?.price 
   function reducer(state:styles,{type}:action):styles{
   switch (type) {
      case 0:
      setColor('black')
      return {style1:'rgb(240, 47, 156)',style2:'black',style3:'black'}
      break;
      case 1:
      setColor('grey')
      return {style1:'black',style2:'rgb(240, 47, 156)',style3:'black'}
      break;
      case 2:
      setColor('white')
      return {style1:'black',style2:'black',style3:'rgb(240, 47, 156)'}
      break;
      default:
      return state
      break;
      }
   }
   enum style {
      width='90%',
      marginLeft='5%',
      height='100%'
   }
   enum style1{
      width='100%',
      height='80%',
      marginTop='10%',
      marginLeft='10%',
      borderRadius='50%'
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
   const [{current:b},{current:g},{current:w}]
   :MutableRefObject<HTMLDivElement>[]=[black,grey,white]
    b.style.border=`2px solid ${state1.style1}`
    g.style.border=`2px solid ${state1.style2}`
    w.style.border=`2px solid ${state1.style3}`
   },[state1])
   useEffect(():void=>{
   const scroll=document.querySelector(`.${cless1}`) as HTMLElement  
   scroll.style.transform=`translateX(${page*-jump}px)`
   },[page])
   return <div style={{width:'100%'}}>
        <div className={cless2}>
         <div className='scroll'>
         <button className='prev'
          onClick={():void=>setPage((x:number):number=>x==0?2:x-1)}>
            <img style={style1} src={img} alt="" />
          </button>
         <button className='next'
          onClick={():void=>setPage((x:number):number=>x==2?0:x+1)}>
            <img style={style1} src={img} alt="" />
          </button>
         </div>
         <div className={cless1}>
           <div className={cless}>
             <img style={style}  src={`${src}`} alt="" />
         </div>
           <div className={cless}>
             <img style={style}  src={`${src1}`} alt="" />
           </div>
             <div className={cless}> 
               <img style={style} src={`${src2}`} alt="" />
            </div>
         </div>
      <div className='aboutName'>{Name}</div>  
      <div className='aboutPrice'>{price}p</div>  
      <div className='color'>
       <div className='color0'>цвет</div>
       <div className='color1'>
       <div className='black' ref={black}
       onClick={():void=>move({type:0})}></div>
       <div className='grey' ref={grey}
       onClick={():void=>move({type:1})}></div>
       <div className='white' ref={white}
       onClick={():void=>move({type:2})}></div>
       <div></div>
       </div>
      </div>
     <div className='divBut'>
     <button className='aboutBut'
      onClick={():void=>{dispatch(add1({id:user1?.id,name:Name,price:price,src:src,color:color}))}}>
         добавить в корзину
      </button>
     </div>
     <div className='baskBack'>
       <Link style={{textDecoration:'none'}} to='/home'>вернуться на главную</Link>
        </div>
        </div> 
     </div>
}