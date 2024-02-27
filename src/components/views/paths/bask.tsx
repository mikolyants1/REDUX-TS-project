
import { NavigateFunction, useOutletContext } from 'react-router-dom'
import { useActions,bind,getById, getUserId } from '../../../store/store.js'
import {useAppSelector, IBask, IState3, FuncRoute, Und, IUser} from '../../../types/state.js'
import {useCallback, useEffect} from 'react'
import styles from '../../../style/bask.module.css';
import BaskCard from '../../ui/blocks/cards/bask/BaskCard.js'
import Error from '../../ui/blocks/load/error.js'
import BuyLink from '../../ui/blocks/links/buyLink.js'
import { useNavigate } from 'react-router-dom';

export default function Bask():JSX.Element {
  const SetContext = useOutletContext<FuncRoute>();
  const navigate:NavigateFunction = useNavigate();
  const id:Und<string> = useAppSelector(getUserId);
  const user:Und<IUser> = useAppSelector((x:IState3)=>getById(x,id));
  if (!user) return <Error />;
const {delItem}:bind = useActions();
useEffect(():void=>SetContext('none'),[]);

const remove = useCallback((i:number) => ():void=>{
   if (typeof user?.id == 'number' && user.bask){
    console.log(i);
 delItem({id:user?.id,index:i,bask:user.bask});
     }
},[])

 return <>
          <div className={styles.linkBlock}>
            <div className={styles.backLink}
             onClick={()=>navigate("/")}>
              Go Back
            </div>
          </div>
          {user.bask.length==0 ? (
            <div className={styles.baskLost}>
              корзина пока пуста
            </div>
            ):(
             <div className={styles.itemList}>
              {user.bask.map((item:IBask,i:number):JSX.Element=>{ 
               const {name,src,price,color}:IBask = item;
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
