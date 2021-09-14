import styles from '../styles/Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href='https://github.com/lucianmurmurache'
        target='_blank'
        rel='noopener noreferrer nofollow'
      >
        Github
      </a>
      <a
        href='https://api.nasa.gov/'
        target='_blank'
        rel='noopener noreferrer nofollow'
      >
        NASA API
      </a>
    </footer>
  );
}

export default Footer;
