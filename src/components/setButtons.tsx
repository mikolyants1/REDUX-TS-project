import { Dispatch,SetStateAction,ChangeEvent } from "react"
import img from '../img/arr.png'
import { User } from "../store/slice"
import { style as style1 } from "../types/state"
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
export function ScrollBut({set,className,style}:props):JSX.Element{
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

interface props1 {
    user:User[],
    data:string,
    chan:(e:ChangeEvent<HTMLInputElement>)=>void,
    set:(e:ChangeEvent<HTMLInputElement>)=>void,
    place:string
  }
  
export function Login({user,data,chan,set,place}:props1):JSX.Element{
const list:JSX.Element[]=user.map(({name,phone}:User,i:number):JSX.Element=>{
  if (data=='name') return <option key={i} value={name}></option>
  else return <option key={i} value={phone}></option>
  })
  return <div className='info'>
       <input name={data} style={style1} type="text" placeholder={place}
        list={data} onChange={(e):void=>{chan(e);set(e)}} />
      <datalist id={data}>
         {list}
      </datalist>
    </div>
  }

  interface props2 {
    set:Dispatch<SetStateAction<state1>>,
    place:string,
    name:string
     }
export function SetUser({set,place,name}:props2):JSX.Element{
   const setData=({target}:ChangeEvent<HTMLInputElement>):void=>{
   set((prev:state1):state1=>({...prev,[target.name]:target.value}))
       }
   return <div className='info'>
       <input name={name} placeholder={place}
        style={style} onChange={setData} type="text" />
      </div>
     }