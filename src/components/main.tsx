import {useState,useReducer,ChangeEvent,useEffect} from 'react'
import {Catalog,Search} from './sales'
import { union2,reduce} from '../types/state'
import { item1,item2,item3,item4,nameMass,mass1 } from './items'
import { mass } from './items'
interface state1{
    show1:reduce,
    show2:reduce
}
interface action{
     type:mass[]
}

interface state2{
    text:string
}
interface state3{
    item:mass[]
}
export default function Main():JSX.Element{
const item5:Array<mass>=[...item1,...item2,...item3,...item4]
const [ser,setSer]=useState<state2>({text:''})
const [items,setItems]=useState<state3>({item:item5})
const [state,dispatch]=useReducer(reducer,{show1:item1,show2:null})
useEffect(():void=>{
const {style}=document.querySelector('body') as HTMLElement
style.background='none'
style.backgroundSize='none'
},[])
const change=(e:ChangeEvent<HTMLInputElement>):void=>{
    setSer({text:e.target.value})
}
function reducer(_:state1,{type}:action):state1 {
 if(type!==items.item) return {show1:type,show2:null}
 else return {show1:null,show2:type}
}
const filter=():void=>{
const val:string=ser.text.trim().toLocaleLowerCase()
const list:mass[]=item5.filter((item:mass):union2=>{
if (item.name.toLowerCase().indexOf(val)!==-1) return item
})
setItems({item:list})
dispatch({type:list})
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
          {nameMass.map(({mass,name}:mass1,i:number):JSX.Element=>(
            <div className='cat1' key={i}
             onClick={():void=>dispatch({type:mass})}>
              {name}
           </div>
          ))}
       </nav>
         <div className='ser'>
           <input type="text" style={style} 
            value={ser.text} onChange={change} />
           <button className='serBut'
             onClick={filter}>
               search
           </button>
        </div>
          <div>
           <Catalog
            show={state.show1}
            />
           <Search 
            show={state.show2}  
            />
        </div>
      </div>
}
