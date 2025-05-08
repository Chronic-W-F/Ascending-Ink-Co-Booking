import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ascending Ink Co</title>
        <meta name="description" content="Book Keigan Andrew Ray – Ascending Ink Co" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.overlay}></div>
          <h1 className={styles.title}>ASCENDING INK CO.</h1>
          <p className={styles.subtitle}>Book with Keigan Andrew Ray</p>
          <div className={styles.formWrapper}>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSc_Keigan_Form_ID/viewform?embedded=true" 
              width="100%" 
              height="1200" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0">
              Loading…
            </iframe>
          </div>
        </div>
      </main>
    </div>
  )
}
