import {useState,useEffect,useRef,useReducer,Dispatch,SetStateAction}  from 'react'
import { SetURLSearchParams,useSearchParams,useOutletContext } from 'react-router-dom'
import {useAppSelector,LinkStyle,union2,union1,union3,MakeArrFromRef,obj} from '../types/state.js';
import { item1,item2,item3,item4 } from './items.jsx';
import { Link,Navigate } from 'react-router-dom';
import { URLSearchParams } from 'url';
import { mass } from './items.js';
import { state } from '../store/slice1.js';
import { state as st,pay1} from '../store/slice.js';
import { useActions,bind,getById } from '../store/store.js';
import img from '../img/arr.png'
import { func } from '../App.js';
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
export default function About():JSX.Element {
   const [data,setData]=useState<datas>({color:'black',auth:false,jump:360})
   const [className,setClassName]=useState<className>({one:'aboutImg',two:'imgDiv',three:'aboutDiv'})
   const [state,dispatch]=useReducer(reducer,{style1:'rgb(240, 47, 156)',style2:'black',style3:'black'})
   const setContext:func=useOutletContext()
   const [page,setPage]=useState<number>(0)
   const black=useRef<HTMLDivElement>(null!)
   const white=useRef<HTMLDivElement>(null!)
   const grey=useRef<HTMLDivElement>(null!)
   const refObj:obj[]=MakeArrFromRef([black,grey,white])
   const [searchParams]:[URLSearchParams,SetURLSearchParams]=useSearchParams();
   const id:string=useAppSelector(({phone:{id}}:state2)=>id)
   const user:union1=useAppSelector((store:state3)=>getById(store,id))
   const {add1}:bind=useActions()
   const Name:union3=searchParams.get("name")
   const item:union2=item1.concat(item2,item3,item4).find(({name}:mass):boolean=>name==Name)
   if (!item) return <div>error</div>
   const {src,src1,src2,price}:union2=item
   const srcArr:string[]=[src,src1,src2]
   function reducer(state:styles,{type}:action):styles{
   setData((prev:datas)=>({...prev,color:type}))
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
      id:user?.id,
      name:Name,
      price:price,
      src:src,
      color:data.color
    }
    add1(obj)
  }else{
  setData((prev:datas)=>({...prev,auth:true}))
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
    setContext('none')
   if (item1.some(({name}:mass):boolean=>name==Name)){
     setClassName({
      one:'aboutImgMac',
      two:'imgDivMac',
      three:'aboutDivMac'
      })
    setData((prev:datas)=>({...prev,jump:450}))
     }
   },[])
   useEffect(():void=>{
   const {style1,style2,style3}:styles=state
   const [{ref:{current:b}},{ref:{current:g}},
   {ref:{current:w}}]:obj[]=refObj
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
                    onClick={():void=>dispatch({type:name})} />
                  ))}
                </div>
              </div>
              <div className='divBut'>
                <button className='aboutBut' onClick={setBask}>
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
   )
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
  set((x:number)=>x==2?0:x+1)
  }else{
  set((x:number)=>x==0?2:x-1)
  }
}
return (
  <button onClick={press} className={className}>
    <img style={style} src={img} alt="" />
  </button>
  )
}