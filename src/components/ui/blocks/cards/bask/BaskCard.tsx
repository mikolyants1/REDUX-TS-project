
import {memo} from 'react'
import styles from '../../../../../style/bask.module.css'
import { style3, style4, style5 } from '../../../../style/style';
import checkMac from '../../../../helpers/functions/items/checkMac';

interface props {
  name:string,
  src:string,
  price:string,
  color:string,
  remove:()=>void
}
function BaskList({name,src,price,color,remove}:props):JSX.Element {
 const isMac:boolean = checkMac(name);
 const imgClass:string = `baskImg${isMac ? "Mac" : ""}`;
 const divClass:string = `item${isMac ? 2 : 1}`;
      
    return (
      <div className={styles[divClass]}>
        <img className={styles[imgClass]}
         src={`../${src}`} alt="" />
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
           onClick={remove}>
            удалить
          </button>
        </div>
      </div>
         );
}

export default memo(BaskList)