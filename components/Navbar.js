import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href='/' id='logo'>
            Mars Rover
          </Link>
        </li>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/images'>Images</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
