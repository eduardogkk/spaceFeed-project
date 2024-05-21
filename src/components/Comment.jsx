import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/125615615?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eduardo Kmiecik</strong>
              <time title="20 de Maio às 15h" dateTime="2024-05-20 15:18:50">Publicado há 1h</time>
            </div>

            <button title="Deletar Comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Parabens, ficou otimo</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>


    </div>
  )
}