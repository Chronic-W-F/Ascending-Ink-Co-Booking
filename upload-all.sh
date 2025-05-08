# === Ascending Ink Co. Starter Structure ===
# Save this as upload-all.sh or use as a folder map

# Create folder: styles/
# File: styles/Home.module.css
# Paste this content in GitHub manually:
# ----------------------------------------
.container {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}
.hero {
  background: url('/tattoo-bg.jpg') no-repeat center center fixed;
  background-size: cover;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 2rem;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}
.title {
  font-size: 3rem;
  z-index: 2;
}
.subtitle {
  font-size: 1.5rem;
  z-index: 2;
  margin-bottom: 2rem;
}
.formWrapper {
  width: 100%;
  max-width: 700px;
  z-index: 2;
}

# ----------------------------------------

# Create folder: pages/
# File: pages/index.js
# Paste this content in GitHub manually:
# ----------------------------------------
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
          <h1 className={
