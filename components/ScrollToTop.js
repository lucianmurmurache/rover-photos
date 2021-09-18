import { useEffect, useState } from 'react';
import styles from '../styles/Scroll.module.scss';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={styles.scrollToTop}>
      {isVisible && (
        <a aria-label='Scroll to top' onClick={scrollToTop}>
          &#x25B2;
        </a>
      )}
    </div>
  );
}
