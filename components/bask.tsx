
import { Link } from 'react-router-dom'
import { del} from '../store/slice'
import { useAppDispatch,useAppSelector } from '../types/state.js'
import { item1 } from './items.jsx'
import { User,bask } from '../store/slice'
import { AnyAction, Dispatch } from '@reduxjs/toolkit'
export default function Bask2():JSX.Element {
    const id:string|undefined=useAppSelector((store)=>store.phone.id)
    const user:User[]=useAppSelector((store)=>store.reduce.user)
    const dispatch:Dispatch<AnyAction>=useAppDispatch()
     const user1:any=user.find((x)=>x.phone==id)
     let imgClass:string=''
     let divClass:string=''
    const list:JSX.Element[]=user1.bask.map(({name,price,src}:bask,index:number)=>{
 if (item1.some((x)=>x.name==name)) {
   imgClass='baskImgMac'
    divClass='item2'
}else{
    imgClass='baskImg'
      divClass='item1'
}
           return <div key={index} className={divClass}>
              <img className={imgClass}  src={`../${src}`} alt="" />
              <div className='baskName' >{name}</div>
              <div className='baskPrice'>{price}</div>
              <div style={{width:'80%',margin:'auto'}}><button style={{width:'50%'}}>купить</button>
              <button style={{width:'50%'}} onClick={()=>{dispatch(del({id:user1.id,index:index}))}}>удалить</button></div>
            </div>
       })
      
       if (user1.bask.length==0) {
        return <div className='baskLost'>
            корзина пока пуста
        </div>
       }else{
        return <div className='itemList'  >
             {list}
             <div className='baskBack'>
            <Link style={{textDecoration:'none'}} to='/home'>вернуться к покупкам</Link>
        </div>
        </div>
       }
  
}