import {memo, useContext} from 'react'
import styles from '../../../../style/about.module.css'
import { style1 } from '../../../style/style'
import { AboutContext } from '../../../../types/state'
import { AboutTheme } from '../../../helpers/context'

function ImgContainer():JSX.Element {
  const {srcs,className,page,jump} = useContext<AboutContext>(AboutTheme);
  
  return (
    <div id='img'
     className={styles[className.two]} 
     style={{
      transform:`translate(${page*-jump}px)`
      }}>
      {srcs.map((item:string,i:number):JSX.Element=>(
       <div className={styles[className.one]} key={i}>
          <img
           style={style1}
           src={`${item}`}
           alt=""
          />
       </div>
       ))}
    </div>
  )
}

export default memo(ImgContainer)