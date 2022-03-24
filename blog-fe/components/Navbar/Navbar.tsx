import { Button } from '@mantine/core'
import Link from 'next/link'
import styles from './Navbar.module.scss'

// TODO: Change navbar to AppShell

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href={'/'} passHref>
              <Button
                component="a"
                variant="gradient"
                gradient={{ from: 'teal', to: 'blue', deg: 60 }}
                size="xl"
                compact
              >
                Mattias Mucherie
              </Button>
            </Link>
          </li>
          <li>
            <Link href={'/training-log'} passHref>
              <Button
                component="a"
                variant="gradient"
                gradient={{ from: 'teal', to: 'blue', deg: 60 }}
                size="xl"
                compact
              >
                Training Log
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
