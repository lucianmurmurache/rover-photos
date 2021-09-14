import styles from '../styles/Home.module.scss';

Home.title = 'Homepage';
export default function Home() {
  return (
    <>
      <section className={styles.main}>
        <h1 className={styles.heading}>Mars Rover Photos</h1>
      </section>
    </>
  );
}
