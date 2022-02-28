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
          <li>
            <Link href={'/training-log'}>Training Log</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
