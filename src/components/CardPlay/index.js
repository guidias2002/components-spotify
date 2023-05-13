import { useState } from 'react'
import styles from './CardPlay.module.css'
import { FaPlay } from 'react-icons/fa'

export default function CardPlay({ artista }) {

  const [mostrar, setMostrar] = useState(false)

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setMostrar(true)}
      onMouseLeave={() => setMostrar(false)}>
      <img src={`assets/artistas/${artista.id}/capa.png`} />

      <div className={styles.descricao}>
        <p>{artista.nome}</p>
        <button
            className={`${mostrar ? styles.botao : styles.naoMostrar}`}
        >
            <FaPlay /></button>
      </div>
    </div>
  )
}
