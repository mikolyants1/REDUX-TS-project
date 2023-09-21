import {useState,useEffect,useRef,useReducer,MutableRefObject,Dispatch,SetStateAction}  from 'react'
import { SetURLSearchParams,useSearchParams } from 'react-router-dom'
import {User} from '../store/slice.js';
import {useAppSelector,LinkStyle,union2,union1,union3 } from '../types/state.js';
import { item1,item2,item3,item4 } from './items.jsx';
import { Link,Navigate } from 'react-router-dom';
import { URLSearchParams } from 'url';
import { mass } from './items.js';
import { state } from '../store/slice1.js';
import { state as st,pay1} from '../store/slice.js';
import { useActions,bind } from '../store/store.js';
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
   type:string
}
interface className {
  one:string,
  two:string,
  three:string
}
type refType=MutableRefObject<HTMLDivElement>
interface obj {
  ref:refType,
  name:string
}
export default function About():JSX.Element {
   const [color,setColor]=useState<string>('black')
   const [className,setClassName]=useState<className>({one:'aboutImg',two:'imgDiv',three:'aboutDiv'})
   const [state1,dispatch]=useReducer(reducer,{style1:'rgb(240, 47, 156)',style2:'black',style3:'black'})
   const [page,setPage]=useState<number>(0)
   const [auth,setAuth]=useState<boolean>(false)
   const [jump,setJump]=useState<number>(360)
   const black=useRef<HTMLDivElement>(null!)
   const white=useRef<HTMLDivElement>(null!)
   const grey=useRef<HTMLDivElement>(null!)
   const refObj:obj[]=[{ref:black,name:'black'},{ref:grey,name:'grey'},{ref:white,name:'white'}]
   const [searchParams]:[URLSearchParams,SetURLSearchParams]=useSearchParams();
   const id:string=useAppSelector(({phone:{id}}:state2)=>id)
   const user:User[]=useAppSelector(({reduce:{user}}:state3)=>user)
   const user1:union1=user.find(({phone}:User):boolean=>phone==id)
   const {add1}:bind=useActions()
   const Name:union3=searchParams.get("name")
   const item:union2=item1.concat(item2,item3,item4).find(({name}:mass):boolean=>name==Name)
   if (!item) return <div>error</div>
   const {src,src1,src2,price}:union2=item
   const srcArr:string[]=[src,src1,src2]
   function reducer(state:styles,{type}:action):styles{
   setColor(type)
   switch (type) {
      case 'black':
      return {style1:'rgb(240, 47, 156)',style2:'black',style3:'black'}
      break;
      case 'grey':
      return {style1:'black',style2:'rgb(240, 47, 156)',style3:'black'}
      break;
      case 'white':
      return {style1:'black',style2:'black',style3:'rgb(240, 47, 156)'}
      break;
      default:
      return state
      break;
      }
   } 
   const setBask=():void=>{
   if (id){
    const obj:pay1={
      id:user1?.id,
      name:Name,
      price:price,
      src:src,
      color:color
    }
    add1(obj)
  }else{
    setAuth(true)
  }
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
    const {style}=document.querySelector('body') as HTMLElement
    style.background='none'
    style.backgroundSize='none'
   if (item1.some(({name}:mass):boolean=>name==Name)){
     setClassName({
      one:'aboutImgMac',
      two:'imgDivMac',
      three:'aboutDivMac'
      })
    setJump(450)
     }
   },[])
   useEffect(():void=>{
   const [{current:{style:b}},{current:{style:g}},
   {current:{style:w}}]:refType[]=[black,grey,white]
   const {style1,style2,style3}:styles=state1
    b.border=`2px solid ${style1}`
    g.border=`2px solid ${style2}`
    w.border=`2px solid ${style3}`
   },[state1])
   useEffect(():void=>{
   const {two}:className=className
   const {style}=document.querySelector(`.${two}`) as HTMLElement  
   style.transform=`translateX(${page*-jump}px)`
   },[page])
   if (auth){
    return <Navigate to='/home' />
   }
   return <div style={style2}>
            <div className={className.three}>
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
                <div className={className.two}>
                  {srcArr.map((item:string,i:number):JSX.Element=>(
                    <div className={className.one} key={i}>
                      <img style={style} src={`${item}`} alt="" />
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
                     onClick={():void=>dispatch({type:name})}>
                    </div>
                   ))}
                 </div>
               </div>
            <div className='divBut'>
             <button className='aboutBut'
              onClick={setBask}>
               добавить в корзину
             </button>
          </div>
          <div className='baskBack'>
           <Link style={LinkStyle} to='/'>
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