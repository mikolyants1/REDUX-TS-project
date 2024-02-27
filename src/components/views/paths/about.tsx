import {useState,useReducer,useMemo,useLayoutEffect }  from 'react'
import { SetURLSearchParams,useSearchParams,useOutletContext } from 'react-router-dom'
import {IDatas,Action1, IClassName,FuncRoute,Und,IAboutContext, IMass} from '../../../types/state.js';
import { item1 } from '../../data/items.js';
import { Link,Navigate } from 'react-router-dom';
import { URLSearchParams } from 'url';
import { LinkStyle, style2 } from '../../style/style.js';
import styles from '../../../style/about.module.css';
import ScrollBut from '../../ui/buttons/scroll.js';
import { reduce} from '../../helpers/reducer.js';
import { getItem } from '../../helpers/functions/items/getItem.js';
import AboutCard from '../../ui/blocks/cards/about/AboutCard.js';
import AddToBask from '../../ui/buttons/add.js';
import { AboutTheme } from '../../helpers/context.js';

export default function About():JSX.Element {
   const [data,move] = useReducer(
    reduce<IDatas,Action1>,
   {color:'black',auth:false,jump:360
   });
   const [className,setClassName] = useState<IClassName>(
   {one:'aboutImg',two:'imgDiv',three:'aboutDiv'});
   const scrolls:string[] = ['prev','next'];
   const setContext = useOutletContext<FuncRoute>();
   const [page,setPage] = useState<number>(0);
   const [param]:[URLSearchParams,SetURLSearchParams] = useSearchParams();
   const Name:string = `${param.get("name")}`;
   const item:IMass = getItem(Name) as IMass;
   const {src,src1,src2,price}:Und<IMass> = item;
   const memoData:IDatas = useMemo(()=>data,[data]);
   const srcs:string[] = [src,src1,src2];

   useLayoutEffect(():void=>{
    setContext('none');
    if (item1.some(({name}:IMass):boolean=>name == Name)){
    setClassName({
      one:'aboutImgMac',
      two:'imgDivMac',
      three:'aboutDivMac'
        });
    move({jump:450});
     };
   },[]);

   const context:IAboutContext = {
     move,srcs,className,page,
     jump:data.jump
   };

   if (data.auth){
     return <Navigate to='/home' />
   }
   return (
        <AboutTheme.Provider value={context}>
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
                name={Name}
                price={price}
                />
              <AddToBask
               data={memoData}
               move={move}
               />
            </div> 
          </div>
        </AboutTheme.Provider>
   )     
}
