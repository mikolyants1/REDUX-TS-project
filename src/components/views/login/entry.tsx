import {useCallback, useEffect,useRef} from 'react'
import {Navigate,useOutletContext } from 'react-router-dom'
import {useAppSelector,IDoor,SetAction,
 Evt, Key, IUser, FuncRoute, IComp} from '../../../types/state.js'
import { bind, useActions ,getUser} from '../../../store/store.js'
import { DivEntry, style } from '../../style/style.js'
import styles from '../../../style/entry.module.css'
import { Login } from '../../ui/inputs/Login.js'
import { useReduce } from '../../helpers/reducer.js'
import EntryLink from '../../ui/blocks/links/EntryLink.js'
import EntryFields from '../../helpers/functions/fields/EntryFields.js'

function Entry():JSX.Element {
  const [state,dispatch] = useReduce();
  const SetContext = useOutletContext<FuncRoute>();
  const user:IUser[] = useAppSelector(getUser);
  const entry = useRef<HTMLDivElement>(null!);
  const {setCurrent,setId}:bind = useActions();
  const Block:IComp[] = EntryFields({setCurrent,setId});
  useEffect(():void=>SetContext('home'),[]);

  useEffect(():void=>{
    const height:number = state.error ? 320 : 300;
    entry.current.style.height = `${height}px`;
  },[state.error]);

  const change = (set:SetAction) => (e:Evt):void =>{
    dispatch({[e.target.name]:e.target.value});
    set(e.target.value);
  };
    const press = useCallback(():void=> {
    const {name:n,phone:p}:IDoor = state;
    if (p && n){
    const count:IUser[] = user.filter(
    (i:IUser):boolean=>i.phone==p&&i.name==n);
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
           {Block.map(({data,pl,set}:IComp,i:number):JSX.Element=>(
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

export default Entry
