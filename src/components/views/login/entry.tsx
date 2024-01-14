import {useCallback, useEffect,useRef} from 'react'
import {Navigate,useOutletContext } from 'react-router-dom'
import {useAppSelector,comp,door, 
setAction, Evt, Key, User, funcRoute} from '../../../types/state.js'
import { bind, useActions ,getUser} from '../../../store/store.js'
import { DivEntry, style } from '../../style/style.js'
import styles from '../../../style/entry.module.css'
import { Login } from '../../ui/inputs/Login.js'
import { useReduce } from '../../helpers/reducer.js'
import EntryLink from '../../ui/blocks/links/EntryLink.js'

export default function Entry():JSX.Element {
    const [state,dispatch] = useReduce();
    const SetContext = useOutletContext<funcRoute>();
    const user:User[] = useAppSelector(getUser);
    const entry = useRef<HTMLDivElement>(null!);
    const {setCurrent,setId}:bind = useActions();
    useEffect(():void=>SetContext('home'),[]);
    useEffect(():void=>{
    const height:number = state.error !=='' ? 320 : 300;
    entry.current.style.height = `${height}px`;
    },[state.error]);
    const change=(set:setAction)=>(e:Evt):void=>{
     dispatch({[e.target.name]:e.target.value});
      set(e.target.value);
    };
    const Block:comp[] = [
     {pl:'login',data:'name',set:setCurrent},
     {pl:'password',data:'phone',set:setId}
    ]
    const press = useCallback(():void=> {
    const {name:n,phone:p}:door = state;
    if (p !== '' && n!== ''){
    const count:User[] = user.filter(
    (i:User):boolean=>i.phone==p&&i.name==n);
    count.length==0
    ? dispatch({error:'не найден'})
    : dispatch({auth:true});
    } else {
     dispatch({auth:false});
      };
    },[state.name,state.phone]);

    const access=(e:Key<HTMLDivElement>):void=>{
      if (e.key==='Enter') press();
    };

    if (state.auth) {
      return <Navigate to='/shop/list/Mac' />
    };

    return (
        <div ref={entry} onKeyUp={access}
         className={styles.login}>
          <div style={DivEntry}>
            Login
          </div>
           {Block.map(({data,pl,set}:comp,i:number):JSX.Element=>(
            <>
              {set&&
               <Login key={i} user={user} data={data}>
                 <input name={data} style={style} type="text"
                  placeholder={pl} list={data} tabIndex={i+1}
                  onChange={change(set)} />
               </Login>}
            </>
            ))}
            <EntryLink
             error={state.error}
             press={press}
             />
          </div>    
          )
}


