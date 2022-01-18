import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ContactWise</title>
        <meta name="description" content="Cloud contact center" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h5>main</h5>
          
         
      </main>

      <footer className={styles.footer}>
      <h5>Footer</h5>
      </footer>
    </div>
  )
}
