import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { add1 } from '../store/slice.js';
import { useAppDispatch,useAppSelector } from '../store/store.js';
import { item1,item2,item3,item4 } from './items.jsx';
import { User} from '../store/slice.js';
import { Link } from 'react-router-dom';
interface state1{
   class:string
}
export default function About():JSX.Element {
   const [cless,setCless]=React.useState<state1>({class:'aboutImg'})
    const [searchParams,setSearchParams] = useSearchParams();
    const id:string=useAppSelector((store)=>store.phone.id)
    const user:User[]=useAppSelector((store)=>store.reduce.user)
    const user1:any=user.find((x)=>x.phone==id)
    const dispatch=useAppDispatch()
    const name:any=searchParams.get("name")
    const item:any|undefined=item1.concat(item2,item3,item4).find((x)=>x.name==name)
    const src:string|undefined=item.src
    const price:string|undefined=item.price
    React.useEffect(()=>{
 if (item1.some((x)=>x.name==name)) {
   setCless({class:'aboutImgMac'})
 }
    },[])
     return <div style={{width:'100%'}}>
        <div className='aboutDiv'>
      <img className={cless.class}  src={`${src}`} alt="" />
      <div className='aboutName'>{name}</div>  
      <div className='aboutPrice' >{price}p</div>  
     <div className='divBut'>
     <button className='aboutBut'
      onClick={()=>{dispatch(add1({id:user1.id,name:name,price:price,src:src}))}} >добавить в корзину
      </button>
     </div>
     <div className='baskBack'>
       <Link style={{textDecoration:'none'}} to='/home'>вернуться на главную</Link>
        </div>
        </div> 
     </div>
}