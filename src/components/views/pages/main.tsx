import {useState,ChangeEvent,useEffect,useReducer, useCallback} from 'react'
import { item1, nameMass,item2,item3,item4} from '../../data/items'
import {state1,union2,union5,union6} from '../../../types/state'
import { mass,mass1 } from '../../data/items'
import styles from '../../../style/sale.module.css'
import { Select } from '../../ui/inputs/Select'
import SaleItem from '../../ui/blocks/cards/ItemCard'
import { useParams } from 'react-router-dom'
import Search from '../../ui/blocks/main/search'
import Error from '../../ui/blocks/load/error'

interface state{
  val:string,
  ser:string
}
interface action{
  [i:string]:string
}

export default function Catalog(): JSX.Element {
const url:string = String(useParams().id);
const show:union5 = nameMass.find(({name}:mass1)=>name==url);
if (!show) return <Error />;
const [state,setState]=useState<state1>({item:show.mass});
const [param,dispatch]=useReducer(reduce,{val:'up',ser:''});
const item5:mass[]=[...item1,...item2,...item3,...item4];

useEffect(():void=>setState({item:show.mass}),[show]);

const filter=useCallback(():void=>{
 const val:string = param.ser.trim().toLocaleLowerCase();
 const list:mass[]=item5.filter((i:mass):union2=>{
  if (i.name.toLowerCase().indexOf(val)!==-1) return i
  });
 setState({item:list});
},[param.ser]);

const change=useCallback((e:ChangeEvent<union6>):void=>{
  dispatch({[e.target.name]:e.target.value});
  },[param]);

function reduce(prev:state,next:action):state{
  return {...prev,...next};
  };

const sort = ():void => {
const {item}:state1 = state;
const [mass1,obj]:[mass[],action] = [[],{}];
item.forEach(({price,name}:mass):void=>{
 const key:number = Number(price.split(' ').join(''));
 obj[key] = name;
  })
const mass:string[] = Array.from(Object.values(obj))
if (param.val == 'down') mass.reverse();
 for (const elem of mass) {
  item.forEach((x:mass):void=>{
   if (elem==x.name) mass1.push(x);
    });
  };
 setState({item:mass1});
  };

return (
      <>
       <Search
        value={param.ser}
        filter={filter}
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
      </>
    )
}
