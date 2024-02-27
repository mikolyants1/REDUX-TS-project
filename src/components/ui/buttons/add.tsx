import {Dispatch, memo} from 'react'
import styles from '../../../style/about.module.css'
import { Und, IUser, Action1, IDatas, IState3, useAppSelector, IMass } from '../../../types/state'
import { getById, getUserId, useActions } from '../../../store/store'
import Error from '../blocks/load/error'
import { SetURLSearchParams, useSearchParams } from 'react-router-dom'
import { getItem } from '../../helpers/functions/items/getItem'

interface props {
    move:Dispatch<Action1>,
    data:IDatas
}

function AddToBask({move,data}:props):JSX.Element {
  const id:string = useAppSelector(getUserId);
  const [param]:[URLSearchParams,SetURLSearchParams] = useSearchParams();
  const user:Und<IUser> = useAppSelector((store:IState3)=>getById(store,id));
  const Name:string = `${param.get("name")}`;
  const item:IMass = getItem(Name) as IMass;
  if (!item) return <Error />;
  const {src,price}:IMass = item;
  const {addItem} = useActions();

  const setBask = ():void=>{
    id ? addItem({
      id:user?.id,
      name:Name,
      price:price,
      src:src,
      color:data.color,
      bask:user?.bask
       })
    : move({auth:true});
   }
  return (
    <div className={styles.divBut}>
      <button onClick={setBask}
       className={styles.aboutBut}>
         добавить в корзину
      </button>
    </div>
  );
};

export default memo(AddToBask);