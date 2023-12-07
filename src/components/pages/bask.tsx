
import { Link,useOutletContext } from 'react-router-dom'
import { useActions,bind,getById, getUserId } from '../../store/store.js'
import {useAppSelector,union, union1} from '../../types/state.js'
import { item1 } from '../data/items.js'
import { bask } from '../../store/slices/slice.js'
import { mass } from '../data/items.js'
import { state } from '../../store/slices/slice.js';
import {useEffect} from 'react'
import { func } from '../../App.js'
import { LinkStyle, style3, style4, style5 } from '../style/style.js'
import styles from '../../style/bask.module.css';

interface state3 {
   reduce:state
}
type List=JSX.Element[]|undefined

export default function Bask2():JSX.Element {
const SetContext=useOutletContext<func>()
const id:union=useAppSelector(getUserId)
const user:union1=useAppSelector((x:state3)=>getById(x,id))
const {delItem}:bind=useActions()
let [imgClass,divClass]:string[]=['','']
useEffect(():void=>SetContext('none'),[])
const remove=(i:number):void=>{
if (typeof user?.id=='number'&&user.bask){
 delItem({id:user?.id,index:i,bask:user.bask})
  }
}
const list:List=user?.bask.map(
  ({name,price,src,color}:bask,i:number):JSX.Element=>{ 
 if (item1.some(({name:n}:mass):boolean=>n==name)) {
  imgClass='baskImgMac';
  divClass='item2';
}else{
  imgClass='baskImg';
  divClass='item1';
}
   return <div key={i} className={styles[divClass]}>
            <img className={styles[imgClass]} src={`../${src}`} alt="" />
            <div className={styles.baskName}>
              {name}
            </div>
            <div className={styles.baskPrice}>
              {price}
            </div>
            <div className={styles.baskColor}>
              <span style={style4}>
                Цвет:
              </span>
               {color?.toUpperCase()}
            </div>
            <div style={style5}>
              <button style={style3}
               onClick={()=>remove(i)}>
                удалить
              </button>
            </div>
          </div>
       })
 return <>
          {user?.bask.length==0?(
            <div className={styles.baskLost}>
              корзина пока пуста
            </div>
            ):(
             <div className={styles.itemList}>
                  {list}
                <div className={styles.baskBack}>
                  <button className={styles.buy}>
                     купить
                  </button>
                  <button className={styles.back}>
                    <Link style={LinkStyle} to='/'>
                      вернуться к покупкам
                    </Link>
                  </button>
                </div>
              </div>
            )}
        </> 
}
