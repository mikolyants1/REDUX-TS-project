import { memo,useLayoutEffect, useMemo, useReducer, useRef} from 'react'
import styles from '../../../../../style/about.module.css';
import { IStyles, IObj } from '../../../../../types/state';
import { getCurrent } from '../../../../helpers/functions/ref/getCurrent';
import { MakeArrFromRef } from '../../../../helpers/functions/ref/makeArrFromRef';
import ImgContainer from '../../about/ImgContainer';
import ColorContainer from '../../about/ColorContainer';
import { initial1, reducer } from '../../../../helpers/reducer';

interface props {
  name:string,
  price:string,
}
function AboutCard({name,price}:props):JSX.Element {
  const [state,dispatch] = useReducer(reducer,initial1);
  const black = useRef<HTMLDivElement>(null!);
  const white = useRef<HTMLDivElement>(null!);
  const grey = useRef<HTMLDivElement>(null!);
  const refObj:IObj[] = MakeArrFromRef(black,grey,white);
  const memoRefs:IObj[] = useMemo(()=>refObj,[refObj]);

  useLayoutEffect(():void=>{
   const {style1,style2,style3}:IStyles = state;
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
       dispatch={dispatch}
       refs={memoRefs}
       />
    </>
  );
};

export default memo(AboutCard);