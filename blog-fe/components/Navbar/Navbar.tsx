import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href={'/'}>Mattias Mucherie</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
