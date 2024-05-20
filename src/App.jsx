import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h1>POST</h1>
          <h1>POST 2</h1>
        </main>
      </div>
    </div>
  )
}
