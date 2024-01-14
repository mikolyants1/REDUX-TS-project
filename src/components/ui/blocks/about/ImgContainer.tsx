import {memo, useContext} from 'react'
import styles from '../../../../style/about.module.css'
import { style1 } from '../../../style/style'
import { AboutContext } from '../../../../types/state'
import { AboutTheme } from '../../../helpers/context'

function ImgContainer():JSX.Element {
  const {srcs,className} = useContext<AboutContext>(AboutTheme);
  return (
    <div className={styles[className.two]} id='img'>
      {srcs.map((item:string,i:number):JSX.Element=>(
       <div className={styles[className.one]} key={i}>
         <img style={style1} src={`${item}`} alt="" />
       </div>
       ))}
    </div>
  )
}

export default memo(ImgContainer)