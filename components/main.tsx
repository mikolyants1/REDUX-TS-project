import React from 'react'
import {Iphone,Mac,Watch,Ipad,Search} from './sales'
import { item1,item2,item3,item4 } from './items.js'
interface state1{
    show1:number,
    show2:number,
    show3:number,
    show4:number,
    show5:number
}
type mass={
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
const [state,setState]=React.useState<state1>({show1:1,show2:0,show3:0,show4:0,show5:0})
const [ser,setSer]=React.useState<state2>({text:''})
const item6:Array<mass>=item1.concat(item2,item3,item4)
const [items,setItems]=React.useState<state3>({item:item6})
function press(x:number):void {
    if (x==0) {
        setState({show1:1,show2:0,show3:0,show4:0,show5:0})
        setSer({text:''})
    }else if(x==1) {
        setState({show1:0,show2:1,show3:0,show4:0,show5:0})
        setSer({text:''})
    }else if(x==2) {
        setState({show1:0,show2:0,show3:1,show4:0,show5:0})
        setSer({text:''})
    }
    else if(x==3) {
        setState({show1:0,show2:0,show3:0,show4:1,show5:0})
        setSer({text:''})
    }
    
}
function search():void {
    if (ser.text!=='') {
        setState({show1:0,show2:0,show3:0,show4:0,show5:1})
       
    }else{
        setState({show1:1,show2:0,show3:0,show4:0,show5:0})
    }
}
function filter():void {
    const val=ser.text.trim().toLocaleLowerCase()
const list=item6.filter((item)=>{
    if (item.name.toLocaleLowerCase().indexOf(val)!==-1) {
        return item
    }
})
setItems({item:list})
}
enum style{
    border=`1px solid grey`,
    width='93%',
    height='26px',
    textAlign='center',
    fontSize='20px',
    backgroundColor='rgb(240, 240, 240)',
}
    return <div className='main'>
    <nav className='catalog'>
<div className='cat1' onClick={()=>press(0)}>Mac</div>
<div className='cat1' onClick={()=>press(1)}>Iphone</div>
<div className='cat1' onClick={()=>press(2)}>Ipad</div>
<div className='cat1' onClick={()=>press(3)}>Watch</div>
    </nav>
    <div className='ser'>
 <input type="text" style={style} value={ser.text}
  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSer({text:e.target.value})} />
 <button className='serBut' onClick={()=>{search();filter()}}>search</button>
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
