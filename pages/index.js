import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mars Rover Photos</title>
        <meta name='description' content="Rover images from Nasa's API" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className={styles.main}>
        <h1 className={styles.heading}>Mars Rover Photos</h1>
      </section>
    </>
  );
}
