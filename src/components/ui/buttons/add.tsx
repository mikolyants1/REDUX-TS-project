import {Dispatch, memo} from 'react'
import styles from '../../../style/about.module.css'
import { Und, User, action1, datas, state3, useAppSelector } from '../../../types/state'
import { getById, getUserId, useActions } from '../../../store/store'
import Error from '../blocks/load/error'
import { SetURLSearchParams, useSearchParams } from 'react-router-dom'
import { mass } from '../../data/items'
import { getItem } from '../../helpers/functions/items/getItem'

interface props {
    move:Dispatch<action1>,
    data:datas
}

function AddToBask({move,data}:props):JSX.Element {
  const id:string = useAppSelector(getUserId);
  const [param]:[URLSearchParams,SetURLSearchParams] = useSearchParams();
  const user:Und<User> = useAppSelector((store:state3)=>getById(store,id));
  const Name:string = `${param.get("name")}`;
  const item:mass = getItem(Name) as mass;
  if (!item) return <Error />;
  const {src,price}:mass = item;
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