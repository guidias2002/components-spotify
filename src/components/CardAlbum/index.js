import { useState } from 'react'
import styles from './CardAlbum.module.css'
import { FaPlay } from 'react-icons/fa'

export default function CardAlbum({ artista }) {

  const [mostrar, setMostrar] = useState(false)

  return (
    <div
      onMouseEnter={() => setMostrar(true)}
      onMouseLeave={() => setMostrar(false)}
      className={styles.card}>
      <img src={`assets/artistas/${artista.id}/perfil.jpg`} />
      <button
        className={`${mostrar ? styles.botao : styles.naoMostrar}`}
      ><FaPlay />
      </button>
      <div className={styles.descricao}>
        <p className={styles.nome}>{artista.nome}</p>
        <p className={styles.tag}>Artista</p>
      </div>
    </div>
  )
}
