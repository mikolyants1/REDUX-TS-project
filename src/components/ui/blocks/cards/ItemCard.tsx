import { MouseEvent, memo } from "react"
import { Link } from "react-router-dom"
import { item1, mass } from "../../../data/items";
import styles from '../../../../style/sale.module.css'

interface props {
    name:string,
    src:string,
    src1:string,
    price:string
}

function ItemCard({name,price,src,src1}:props):JSX.Element {
 const isMac:boolean=item1.some((i:mass)=>i.name == name);
 const str:string= isMac ? 'Mac' : '';
 const priceClass:string = `itemPrice${str}`;
 const imgClass:string = `itemImg${str}`;
 const nameClass:string = `itemName${str}`;
  
 const imgChan=(item:string)=>
 (e:MouseEvent<HTMLImageElement>):void=>{
    e.currentTarget.src = item;
  };
  
 return  (
    <div className={styles.item} key={name}>
      <img className={styles[imgClass]} 
       onMouseOver={imgChan(src1)}
       onMouseOut={imgChan(src)}
       src={src} alt="" />
      <div className={styles[nameClass]}>
        <Link className={styles.itemLink}
         to={`/shop/about/?name=${name}`}>
           {name}
        </Link>
      </div>
      <div className={styles[priceClass]}>
        {price}p
      </div>
    </div>
   );
};

export default memo(ItemCard)