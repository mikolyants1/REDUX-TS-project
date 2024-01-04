
import { useOutletContext } from 'react-router-dom'
import { useActions,bind,getById, getUserId } from '../../../store/store.js'
import {useAppSelector,union, union1, bask, state3, funcRoute} from '../../../types/state.js'
import {useCallback, useEffect} from 'react'
import styles from '../../../style/bask.module.css';
import BaskList from '../../ui/blocks/cards/BaskList.js'
import Error from '../../ui/blocks/load/error.js'
import BuyLink from '../../ui/blocks/links/buyLink.js'

export default function Bask():JSX.Element {
const SetContext = useOutletContext<funcRoute>();
const id:union = useAppSelector(getUserId);
const user:union1 = useAppSelector((x:state3)=>getById(x,id));
if (!user) return <Error />
const {delItem}:bind = useActions();
useEffect(():void=>SetContext('none'),[]);

const remove = useCallback((i:number) => ():void=>{
if (typeof user?.id=='number'&&user.bask){
 delItem({id:user?.id,index:i,bask:user.bask});
  }
},[])

 return <>
          {user.bask.length==0 ? (
            <div className={styles.baskLost}>
              корзина пока пуста
            </div>
            ):(
             <div className={styles.itemList}>
              {user.bask.map((item:bask,i:number):JSX.Element=>{ 
               const {name,src,price,color}:bask = item;
               return (
                <BaskList
                 key={i}
                 name={name}
                 src={src}
                 price={price}
                 color={color}
                 remove={remove(i)}
                 />
                )})}
               <BuyLink />
             </div>
            )}
        </> 
}
