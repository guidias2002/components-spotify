import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import HeaderLink from 'components/HeaderLink'

export default function Header() {
  return (
    <header className={styles.header}>
        <nav className={styles.lista}>
            <HeaderLink to='/' className={styles.item}>Component Play</HeaderLink>
            <HeaderLink to='/cardAlbum' className={styles.item}>Component Album</HeaderLink>
        </nav>
    </header>
  )
}
