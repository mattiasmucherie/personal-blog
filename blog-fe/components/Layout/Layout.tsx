import { FC } from 'react'
import styles from "./Layout.module.scss"

const Layout: FC = ({children}) => {
  return <div className={styles.contentContainer}>{children}</div>
}



export default Layout