import styles from '../styles/Home.module.scss';

Home.title = 'Homepage';
Home.description =
  'Mars Rover images, includes camera name, date when it was taken and the rover name.';
export default function Home() {
  return (
    <section className={styles.main}>
      <h1>
        Image data gathered by NASA&apos;s Curiosity, Opportunity, and Spirit
        rovers on Mars.
      </h1>

      <p>
        The info is fetched via NASA&apos;s public{' '}
        <a
          href='https://api.nasa.gov/'
          target='_blank'
          rel='noopener noreferrer nofollow'
        >
          API
        </a>
      </p>
    </section>
  );
}
