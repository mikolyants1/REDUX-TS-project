
import { useOutletContext } from 'react-router-dom'
import { useActions,bind,getById, getUserId } from '../../../store/store.js'
import {useAppSelector, bask, state3, funcRoute, Und, User} from '../../../types/state.js'
import {useCallback, useEffect} from 'react'
import styles from '../../../style/bask.module.css';
import BaskCard from '../../ui/blocks/cards/BaskCard.js'
import Error from '../../ui/blocks/load/error.js'
import BuyLink from '../../ui/blocks/links/buyLink.js'

export default function Bask():JSX.Element {
const SetContext = useOutletContext<funcRoute>();
const id:Und<string> = useAppSelector(getUserId);
const user:Und<User> = useAppSelector((x:state3)=>getById(x,id));
if (!user) return <Error />
const {delItem}:bind = useActions();
useEffect(():void=>SetContext('none'),[]);

const remove = useCallback((i:number) => ():void=>{
if (typeof user?.id=='number'&&user.bask){
 console.log(i);
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
                <BaskCard
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
