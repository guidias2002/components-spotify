import CardAlbum from 'components/CardAlbum'
import styles from './PaginaCardAlbum.module.css'
import artistas from 'json/artistas.json'

export default function PaginaCardAlbum() {
  return (
    <main className={styles.principal}> 
      <section className={styles.container}>
        <ul className={styles.lista}>
          {artistas.map((artista) => {
            return (
              <li key={artista.id}>
                <CardAlbum artista={artista}/>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
