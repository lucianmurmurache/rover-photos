import Link from 'next/link';
import styles from '../styles/Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        href='https://github.com/lucianmurmurache'
        target='_blank'
        rel='noopener noreferrer nofollow'
      >
        Github
      </Link>
      <Link
        href='https://api.nasa.gov/'
        target='_blank'
        rel='noopener noreferrer nofollow'
      >
        NASA API
      </Link>
    </footer>
  );
}

export default Footer;
