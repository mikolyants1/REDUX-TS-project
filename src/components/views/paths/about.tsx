import {useState,useEffect,useReducer, useMemo, useCallback}  from 'react'
import { SetURLSearchParams,useSearchParams,
useOutletContext } from 'react-router-dom'
import {useAppSelector,union2,union1, datas,
 action1, className, state3, Styles, funcRoute} from '../../../types/state.js';
import { item1,item2,item3,item4 } from '../../data/items.js';
import { Link,Navigate } from 'react-router-dom';
import { URLSearchParams } from 'url';
import { mass } from '../../data/items.js';
import { useActions,bind,getById, getUserId } from '../../../store/store.js';
import { LinkStyle, style2 } from '../../style/style.js';
import styles from '../../../style/about.module.css';
import { ScrollBut } from '../../ui/buttons/scroll.js';
import { reduce, reducer } from '../../helpers/reducer.js';
import { getItem } from '../../helpers/functions.js';
import AboutCard from '../../ui/blocks/cards/AboutCard.js';
import Error from '../../ui/blocks/load/error.js';

export default function About():JSX.Element {
   const [data,move] = useReducer(reduce<datas,action1>,
   {color:'black',auth:false,jump:360});
   const [className,setClassName] = useState<className>(
   {one:'aboutImg',two:'imgDiv',three:'aboutDiv'});
   const [state,dispatch] = useReducer(reducer,
   {style1:'rgb(240, 47, 156)',style2:'black',style3:'black'});
   const scrolls:string[] = ['prev','next'];
   const setContext = useOutletContext<funcRoute>();
   const [page,setPage] = useState<number>(0);
   const [param]:[URLSearchParams,SetURLSearchParams] = useSearchParams();
   const id:string = useAppSelector(getUserId);
   const user:union1 = useAppSelector((store:state3)=>getById(store,id));
   if (!user) return <Error />
   const {addItem}:bind = useActions();
   const Name:string = String(param.get("name"));
   const item:union2 = getItem([item1,item2,item3,item4],Name);
   if (!item) return <Error />
   const {src,src1,src2,price}:union2 = item;
   const memoNames:className = useMemo(()=>className,[className]);
   const memoStyles:Styles = useMemo(()=>state,[state]);
   const srcArr:string[] = useMemo(()=>[src,src1,src2],[]);

   const toggle = useCallback((name:string) => ():void => {
    dispatch({type:name});
    move({type:name})
   },[]);
  
   const setBask=():void=>{
    id ? addItem({
      id:user.id,
      name:Name,
      price:price,
      src:src,
      color:data.color,
      bask:user?.bask
       })
    : move({auth:true});
   }
   useEffect(():void=>{
    setContext('none');
    if (item1.some(({name}:mass):boolean=>name==Name)){
    setClassName({
      one:'aboutImgMac',
      two:'imgDivMac',
      three:'aboutDivMac'
        });
    move({jump:450});
     };
   },[]);

   useEffect(():void=>{
   const {style}=document.getElementById("img") as HTMLElement;
   style.transform = `translateX(${page*-data.jump}px)`;
   },[page]);

   if (data.auth){
     return <Navigate to='/home' />
   }
   return (
          <div style={style2}>
            <div className={styles.AboutBack}>
              <Link style={LinkStyle} to='/'>
                &#8592;вернуться на главную
              </Link>
            </div>
            <div className={styles[className.three]}>
              <div className={styles.scroll}>
               {scrolls.map((item:string):JSX.Element=>(
                <ScrollBut
                 key={item}
                 set={setPage}
                 className={item}
                  />
                ))}
              </div>
              <AboutCard
               name={`${Name}`}
               src={srcArr}
               state={memoStyles}
               className={memoNames}
               price={price}
               toggle={toggle}
               />
              <div className={styles.divBut}>
                <button onClick={setBask}
                 className={styles.aboutBut}>
                   добавить в корзину
                </button>
              </div>
            </div> 
          </div>
   )     
}
