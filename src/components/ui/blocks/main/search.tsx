import {ChangeEvent, Dispatch, FocusEvent, SetStateAction, memo} from 'react'
import styles from '../../../../style/sale.module.css'
import { style6 } from '../../../style/style';
import { Key, state1, union6 } from '../../../../types/state';
import {mass } from '../../../data/items';
import sortItems from '../../../helpers/functions/items/sortItems';

interface props {
    value:string,
    set:Dispatch<SetStateAction<state1>>,
    change:(e:ChangeEvent<union6>)=>void
};

function Search({value,set,change}:props):JSX.Element {
  const filter = ():void => {
    const list:mass[] = sortItems(value);
    set({item:list});
   };
   
  const keyHandler = (e:Key<HTMLInputElement>):void => {
    if (e.key==='Enter') filter();
  };

  const inputEvent = (e:FocusEvent<HTMLInputElement>):void => {
    e.target.style.backgroundColor=`rgb(${
      e.type=='blur'?'240,240,240':'200,200,200'
    })`;
  };
  return (
    <div className={styles.ser}>
      <input type="text" name='ser' 
       onKeyUp={keyHandler} onBlur={inputEvent}
       onFocus={inputEvent} onChange={change}
       value={value} style={style6} />
      <button onClick={filter}
       className={styles.serBut}>
        search
      </button>
    </div>
  )
}

export default memo(Search)