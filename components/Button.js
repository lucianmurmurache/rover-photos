import styles from '../styles/Button.module.scss';

function Button({ children, ...otherProps }) {
  return (
    <button className={styles.btn} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
