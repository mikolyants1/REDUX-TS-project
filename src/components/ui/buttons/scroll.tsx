import { Dispatch,FC,SetStateAction, memo } from "react"
import img1 from '../../../img/arr.png'
import { ScrollStyle } from "../../style/style.js"
import styles from '../../../style/about.module.css'

interface scrollProp {
    set:Dispatch<SetStateAction<number>>,
    className:string,
  }
const ScrollBut:FC<scrollProp>= ({set,className}):JSX.Element=>{
    const press = ():void =>{
      className=='next'
      ? set((x:number)=> x == 2 ? 0 : x+1)
      : set((x:number)=> x == 0 ? 2 : x-1);
    }
  return (
    <button onClick={press} className={styles[className]}>
      <img style={ScrollStyle} src={img1} alt="" />
    </button>
    )
  }

  export default memo(ScrollBut)