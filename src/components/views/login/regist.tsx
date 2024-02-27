import {useEffect,useRef,useCallback} from'react'
import { Navigate,useOutletContext } from 'react-router-dom'
import {useAppSelector,IComp, IDoor,Evt, Key, IUser, FuncRoute} from '../../../types/state.js'
import { bind, useActions,getUser } from '../../../store/store.js'
import { DivEntry } from '../../style/style.js'
import styles from '../../../style/entry.module.css'
import { Register } from '../../ui/inputs/Register.js'
import { useReduce } from '../../helpers/reducer.js'

type Block = Omit<IComp,'set'>;

export default function Regist():JSX.Element {
const SetContext = useOutletContext<FuncRoute>();
const [state,dispatch] = useReduce();
const Block:Omit<IComp,'set'>[] = [
{pl:'login',data:'name'},
{pl:'password',data:'phone'}];
const user:IUser[] = useAppSelector(getUser);
const {addUser}:bind = useActions();
const regist = useRef<HTMLDivElement>(null!);
useEffect(():void=>SetContext('regist'),[]);

useEffect(():void=>{
const height:number=state.error!==''? 260 : 240;
regist.current.style.height = `${height}px`;
},[state.error]);

function press():void {
  const {name:n,phone:p}:IDoor = state;
  if (n !== '' && p !== '') {
  const count:IUser[]=user.filter((i:IUser)=>(
    i.phone == p || i.name == n
  ));
    if (count.length>0) {
     dispatch({error:'уже есть'});
      } else { 
     addUser({name:n,phone:p,obj:user});
     dispatch({auth:true});
      }
    } else {
     dispatch({auth:false});
    };
  };

  const access=(e:Key<HTMLDivElement>):void=>{
    if (e.key==='Enter') press();
  };

  const set = useCallback((e:Evt):void=>{
    dispatch({[e.target.name]:e.target.value});
   },[]);
   
  if (state.auth) {
   return <Navigate to='/home' />;
  };
  return (
        <div ref={regist} onKeyUp={access}
         className={styles.user}>
          <div style={DivEntry}>
            Regist
          </div>
          {Block.map((item:Block,i:number):JSX.Element=>(
            <Register
             key={i}
             set={set}
             place={item.pl}
             name={item.data}
             id={i+1}
             />
           ))}
          <div className={styles.error}>
            {state.error}
          </div>
          <div className={styles.reg1}>
            <button className={styles.but1} 
             tabIndex={3} onClick={press}>
              зарегестрироваться
            </button>
          </div> 
        </div>
        );
  }
