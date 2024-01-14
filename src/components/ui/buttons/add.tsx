import {memo} from 'react'
import styles from '../../../style/about.module.css'

interface props {
    add:()=>void
}

function AddToBask({add}:props):JSX.Element {
  return (
    <div className={styles.divBut}>
      <button onClick={add}
       className={styles.aboutBut}>
         добавить в корзину
      </button>
    </div>
  );
};

export default memo(AddToBask);