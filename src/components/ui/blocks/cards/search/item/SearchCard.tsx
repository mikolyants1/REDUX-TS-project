import {memo} from 'react'
import styles from '../../../../../../style/main.module.css'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import checkMac from '../../../../../helpers/functions/items/checkMac'

interface props {
  src:string,
  name:string
};

function SearchCard({src,name}:props):JSX.Element {
  const isMac:boolean = checkMac(name);
  const className:string = isMac ? "serMac" : "serImg";
  const navigate:NavigateFunction = useNavigate();

  const nav = ():void => {
    navigate(`/shop/about/?name=${name}`);
  }
  return (
        <div onClick={nav}
         className={styles.serCard}>
          <div style={{cursor:"pointer"}}>
            {name}
          </div>
          <div>
           <img
            className={styles[className]}
            src={src}
            />
          </div>
        </div>
  )
}

export default memo(SearchCard)