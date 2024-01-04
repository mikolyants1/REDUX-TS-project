import { memo } from 'react'
import styles from '../../../../style/bask.module.css'
import { LinkStyle } from '../../../style/style'
import { Link } from 'react-router-dom'

function BuyButton():JSX.Element {
  return (
    <div className={styles.baskBack}>
      <button className={styles.buy}>
         купить
      </button>
      <button className={styles.back}>
        <Link style={LinkStyle} to='/'>
           вернуться к покупкам
        </Link>
      </button>
    </div>
  )
}

export default memo(BuyButton)