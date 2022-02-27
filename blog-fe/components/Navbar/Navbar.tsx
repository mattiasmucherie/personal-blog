import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href={'/'}>
              <a className={styles.name}>
                <span>Mattias</span> {''}
                <span>Mucherie</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
