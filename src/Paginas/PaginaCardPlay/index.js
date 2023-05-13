import CardPlay from 'components/CardPlay'
import artistas from 'json/artistas.json'
import styles from './PaginaCardPlay.module.css'

export default function PaginaCardPlay() {
    return (
        <main className={styles.principal}>
            <section className={styles.container}>
                <ul className={styles.lista}>
                    {artistas.map((artista) => (
                        <li className={styles.item} key={artista.id}>
                            <CardPlay artista={artista} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}
