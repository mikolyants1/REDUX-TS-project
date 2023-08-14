import React from 'react'
import {Iphone,Mac,Watch,Ipad,Search} from './sales'
import { item1,item2,item3,item4 } from './items'
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
export type mass={
    src:string,
    name:string,
    price:string
}
interface state2{
    text:string
}
interface state3{
    item:mass[]
}
export default function Main():JSX.Element{
const [ser,setSer]=React.useState<state2>({text:''})
const [state,dispatch]=React.useReducer(reducer,{show1:1,show2:0,show3:0,show4:0,show5:0})
const item6:Array<mass>=item1.concat(item2,item3,item4)
const [items,setItems]=React.useState<state3>({item:item6})
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
function filter():void {
const val:string=ser.text.trim().toLocaleLowerCase()
const list:mass[]=item6.filter((item:mass)=>{
if (item.name.toLocaleLowerCase().indexOf(val)!==-1) {
    return item
    }
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
<div className='cat1' onClick={()=>dispatch({type:0})}>Mac</div>
<div className='cat1' onClick={()=>dispatch({type:1})}>Iphone</div>
<div className='cat1' onClick={()=>dispatch({type:2})}>Ipad</div>
<div className='cat1' onClick={()=>dispatch({type:3})}>Watch</div>
    </nav>
    <div className='ser'>
 <input type="text" style={style} value={ser.text}
  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSer({text:e.target.value})} />
 <button className='serBut' onClick={()=>{dispatch({type:4});filter()}}>search</button>
        </div>
    <div >
    <Mac show={state.show1} item={item1} />
    <Iphone show={state.show2} item={item2} />
    <Ipad show={state.show3} item={item3} />
    <Watch show={state.show4} item={item4}  />
    <Search show={state.show5} item={items.item}  />
    </div>
    </div>
}
