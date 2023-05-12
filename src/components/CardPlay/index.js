import styles from './CardPlay.module.css'

export default function CardPlay({ artista }) {
  return (
    <div>
      <img src={`assets/artistas/${artista.id}/capa.png`}/>
      <h2>{artista.nome}</h2>
    </div>
  )
}
