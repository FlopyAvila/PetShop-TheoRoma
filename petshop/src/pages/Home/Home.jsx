import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroEmoji}>🐾</span>
          <h1 className={styles.heroTitle}>
            Todo para tu<br />
            <span className={styles.heroHighlight}>mascota</span>
          </h1>
          <p className={styles.heroSub}>Encontrá los mejores productos para tu compañero peludo. Alimentos, juguetes, accesorios y más con el mejor precio.
          </p>
          <Link to="/productos" className={styles.heroCta}>Ver productos</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
