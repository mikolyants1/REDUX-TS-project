import {useState,useReducer,ChangeEvent,useEffect} from 'react'
import {Catalog,Search} from './sales'
import { union2} from '../types/state'
import { item1,item2,item3,item4 } from './items'
import { mass } from './items'
interface state1{
    show1:number,
    show2:number,
    show3:number,
    show4:number,
    show5:number
}
interface action{
     type:number
}

interface state2{
    text:string
}
interface state3{
    item:mass[]
}
export default function Main():JSX.Element{
const [ser,setSer]=useState<state2>({text:''})
const [state,dispatch]=useReducer(reducer,{show1:1,show2:0,show3:0,show4:0,show5:0})
const item5:Array<mass>=[...item1,...item2,...item3,...item4]
const [items,setItems]=useState<state3>({item:item5})
useEffect(():void=>{
const {style}=document.querySelector('body') as HTMLElement
style.background='none'
},[])
const change=(e:ChangeEvent<HTMLInputElement>):void=>{
    setSer({text:e.target.value})
}
function reducer(state:state1,{type}:action):state1 {
switch (type) {
    case 0:
        return {show1:1,show2:0,show3:0,show4:0,show5:0}
        break;
    case 1:
        return {show1:0,show2:1,show3:0,show4:0,show5:0}
        break;
    case 2:
        return {show1:0,show2:0,show3:1,show4:0,show5:0}
        break
    case 3:
        return {show1:0,show2:0,show3:0,show4:1,show5:0}
        break
    case 4:
        if (ser.text!=='') {
        return {show1:0,show2:0,show3:0,show4:0,show5:1}
        }else{
        setSer({text:''}) 
        return {show1:1,show2:0,show3:0,show4:0,show5:0}
        }
        break
        default:
        return state
        break;
    } 
}
const filter=():void=>{
const val:string=ser.text.trim().toLocaleLowerCase()
const list:mass[]=item5.filter((item:mass):union2=>{
if (item.name.toLowerCase().indexOf(val)!==-1) return item
})
setItems({item:list})
}
enum style {
    border=`1px solid grey`,
    width='93%',
    height='26px',
    textAlign='center',
    fontSize='20px',
    backgroundColor='rgb(240, 240, 240)',
}
return <div className='main'>
        <nav className='catalog'>
         <div className='cat1'
          onClick={():void=>dispatch({type:0})}>
            Mac
         </div>
         <div className='cat1'
          onClick={():void=>dispatch({type:1})}>
            Iphone
         </div>
         <div className='cat1'
          onClick={():void=>dispatch({type:2})}>
            Ipad
         </div>
         <div className='cat1'
          onClick={():void=>dispatch({type:3})}>
            Watch
         </div>
       </nav>
         <div className='ser'>
           <input type="text" style={style} 
            value={ser.text} onChange={change} />
           <button className='serBut'
             onClick={():void=>{dispatch({type:4});filter()}}>
               search
           </button>
        </div>
          <div>
           <Catalog
            show={state.show1}
            item={item1}
            />
           <Catalog
            show={state.show2}
            item={item2}
            />
           <Catalog
            show={state.show3} 
            item={item3}  
            />
           <Catalog
            show={state.show4} 
            item={item4} 
            />
           <Search 
            show={state.show5} 
            item={items.item}  
            />
        </div>
      </div>
}
