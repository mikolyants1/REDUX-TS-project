import {memo,useLayoutEffect, useMemo, useRef} from 'react'
import styles from '../.././../../style/about.module.css';
import { Styles, obj } from '../../../../types/state';
import { getCurrent } from '../../../helpers/functions/getCurrent';
import { MakeArrFromRef } from '../../../helpers/functions/makeArrFromRef';
import ImgContainer from '../about/ImgContainer';
import ColorContainer from '../about/ColorContainer';

interface props {
  name:string,
  price:string,
  state:Styles
}
function AboutCard({name,price,state}:props):JSX.Element {
  const black = useRef<HTMLDivElement>(null!);
  const white = useRef<HTMLDivElement>(null!);
  const grey = useRef<HTMLDivElement>(null!);
  const refObj:obj[] = MakeArrFromRef(black,grey,white);
  const memoRefs:obj[] = useMemo(()=>refObj,[refObj]);

  useLayoutEffect(():void=>{
   const {style1,style2,style3}:Styles = state;
   const [b,g,w]:HTMLDivElement[] = getCurrent(refObj);
   b.style.border = `2px solid ${style1}`;
   g.style.border = `2px solid ${style2}`;
   w.style.border = `2px solid ${style3}`;
  },[state]);
  
  return (
    <>
      <ImgContainer />
      <div className={styles.aboutName}>
        {name}
      </div>  
      <div className={styles.aboutPrice}>
        {price}p
      </div>  
      <ColorContainer
       refs={memoRefs}
       />
    </>
  );
};

export default memo(AboutCard);