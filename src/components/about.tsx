import React from 'react'
import { SetURLSearchParams,useSearchParams } from 'react-router-dom'
import { add1 } from '../store/slice.js';
import { useAppDispatch,useAppSelector } from '../types/state.js';
import { item1,item2,item3,item4 } from './items.jsx';
import { User} from '../store/slice.js';
import { Link } from 'react-router-dom';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { URLSearchParams } from 'url';
import { mass } from './main.js';

export default function About():JSX.Element {
   const [cless,setCless]=React.useState<string>('aboutImg')
   const [searchParams]:[URLSearchParams,SetURLSearchParams] = useSearchParams();
   const id:string=useAppSelector((store)=>store.phone.id)
   const user:User[]=useAppSelector((store)=>store.reduce.user)
   const user1:any=user.find(({phone}:User)=>phone==id)
   const dispatch:Dispatch<AnyAction>=useAppDispatch()
   const Name:any=searchParams.get("name")
   const item:any=item1.concat(item2,item3,item4).find(({name}:mass)=>name==Name)
   const src:string|undefined=item.src
   const price:string|undefined=item.price
    React.useEffect(()=>{
 if (item1.some(({name}:mass)=>name==Name)) {
   setCless('aboutImgMac')
 }
  },[])
     return <div style={{width:'100%'}}>
        <div className='aboutDiv'>
      <img className={cless}  src={`${src}`} alt="" />
      <div className='aboutName'>{Name}</div>  
      <div className='aboutPrice' >{price}p</div>  
     <div className='divBut'>
     <button className='aboutBut'
      onClick={()=>{dispatch(add1({id:user1.id,name:Name,price:price,src:src}))}} >добавить в корзину
      </button>
     </div>
     <div className='baskBack'>
       <Link style={{textDecoration:'none'}} to='/home'>вернуться на главную</Link>
        </div>
        </div> 
     </div>
}