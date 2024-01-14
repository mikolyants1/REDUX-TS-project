import {useState,ChangeEvent,useEffect,useReducer, useCallback} from 'react'
import {nameMass,} from '../../data/items'
import {action3, state1,state4,union5,union6} from '../../../types/state'
import { mass,mass1 } from '../../data/items'
import styles from '../../../style/sale.module.css'
import { Select } from '../../ui/inputs/Select'
import SaleItem from '../../ui/blocks/cards/ItemCard'
import { useParams } from 'react-router-dom'
import Search from '../../ui/blocks/main/search'
import Error from '../../ui/blocks/load/error'
import { reduce } from '../../helpers/reducer'

export default function Catalog():JSX.Element {
const url:string = useParams().id ?? "Mac";
const show:union5 = nameMass.find(({name}:mass1)=>name == url);
if (!show) return <Error />;
const [state,setState]=useState<state1>({item:show.mass});
const [param,dispatch]=useReducer(reduce<state4,action3>,{val:'up',ser:''});

useEffect(():void=>setState({item:show.mass}),[show]);

const change=useCallback((e:ChangeEvent<union6>):void=>{
  dispatch({[e.target.name]:e.target.value});
},[param]);

const sort = ():void => {
const {item}:state1 = state;
const [mass1,obj]:[mass[],action3] = [[],{}];
item.forEach(({price,name}:mass):void=>{
 const key:string = price.split(' ').join('');
 obj[key] = name;
  })
const mass:string[] = Array.from(Object.values(obj));
if (param.val == 'down') mass.reverse();
 for (const elem of mass) {
  item.forEach((x:mass):void=>{
   if (elem==x.name) mass1.push(x);
    });
  };
 setState({item:mass1});
};

return (
      <main>
       <Search
        value={param.ser}
        set={setState}
        change={change}
        />
        <div className={styles.sel}> 
          <Select value={param.val} onChange={change}>
            <button onClick={sort}>
               отсортировать
            </button> 
          </Select>
        </div>
        <div className={styles.main1}>
          {state.item.map((props:mass):JSX.Element=>{
           const {src,src1,name,price}:mass = props;
           return (
            <SaleItem
             src={src}
             src1={src1}
             name={name}
             price={price}
            />
           )})}
        </div>
      </main>
    )
}
