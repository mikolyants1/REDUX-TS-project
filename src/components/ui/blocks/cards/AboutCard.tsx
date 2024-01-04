import {memo, useLayoutEffect, useRef} from 'react'
import styles from '../.././../../style/about.module.css';
import { Styles, className, obj } from '../../../../types/state';
import { MakeArrFromRef, getCurrent } from '../../../helpers/functions';
import { style1 } from '../../../style/style';

interface props {
  name:string,
  price:string,
  src:string[],
  className:className,
  state:Styles,
  toggle:(name:string)=>()=>void
}
function AboutCard(props:props):JSX.Element {
  const {name,price,toggle,state,src,className}:props = props;
  const black = useRef<HTMLDivElement>(null!);
  const white = useRef<HTMLDivElement>(null!);
  const grey = useRef<HTMLDivElement>(null!);
  const refObj:obj[] = MakeArrFromRef(black,grey,white);

  useLayoutEffect(():void=>{
    const {style1,style2,style3}:Styles = state;
    const [b,g,w]:HTMLDivElement[] = getCurrent(refObj);
     b.style.border=`2px solid ${style1}`
     g.style.border=`2px solid ${style2}`
     w.style.border=`2px solid ${style3}`
    },[state]);
  
    
  return (
    <>
      <div className={styles[className.two]} id='img'>
        {src.map((item:string,i:number):JSX.Element=>(
        <div className={styles[className.one]} key={i}>
          <img style={style1} src={`${item}`} alt="" />
        </div>
        ))}
      </div>
      <div className={styles.aboutName}>
        {name}
      </div>  
      <div className={styles.aboutPrice}>
        {price}p
      </div>  
      <div className={styles.color}>
        <div className={styles.color0}>
          цвет
        </div>
        <div className={styles.color1}>
         {refObj.map(({name,ref}:obj,i:number):JSX.Element=>(
           <div className={styles[name]} ref={ref}
             key={i} onClick={toggle(name)} />
          ))}
        </div>
      </div>
    </>
  )
}

export default memo(AboutCard)