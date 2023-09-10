import {useState,ChangeEvent,useEffect} from 'react'
import {Catalog} from './sales'
import { union2} from '../types/state'
import { item1,item2,item3,item4,nameMass,mass1 } from './items'
import { mass } from './items'
interface state2{
    text:string
}
export default function Main():JSX.Element{
const item5:Array<mass>=[...item1,...item2,...item3,...item4]
const [ser,setSer]=useState<state2>({text:''})
const [state,setState]=useState({item:item1})
useEffect(():void=>{
const {style}=document.querySelector('body') as HTMLElement
style.background='none'
style.backgroundSize='none'
},[])
const change=(e:ChangeEvent<HTMLInputElement>):void=>{
setSer({text:e.target.value})
}
const filter=():void=>{
const val:string=ser.text.trim().toLocaleLowerCase()
const list:mass[]=item5.filter((item:mass):union2=>{
if (item.name.toLowerCase().indexOf(val)!==-1) return item
})
setState({item:list})
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
             onClick={():void=>setState({item:mass})}>
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
            show={state.item}
            />  
        </div>
      </div>
}
