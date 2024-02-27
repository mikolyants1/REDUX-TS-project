import { memo, startTransition, useEffect, useState} from 'react'
import { mass } from '../../../../data/items';
import sortItems from '../../../../helpers/functions/items/sortItems';
import styles from '../../../../../style/main.module.css';
import SearchCard from './item/SearchCard';

interface props {
  val:string
};

function SearchMapCard({val}:props):JSX.Element {
 const [items,setItems] = useState<mass[]>([]);

  useEffect(():void=>{
  startTransition(():void=>{
    const list:mass[] = sortItems(val);
    setItems(list);
  });
  },[val]);
  
  return (
    <>
     {(val&&items.length) ? (
      <div className={styles.serBlock}>
        {items.map((i:mass):JSX.Element=>(
          <SearchCard
           key={i.name}
           name={i.name}
           src={i.src}
          />
        ))}
      </div>
      ) : <></> }
    </>
  )
}

export default memo(SearchMapCard)