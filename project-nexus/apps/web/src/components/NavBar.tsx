import React, { useState } from 'react';
import styles from './NavBar.module.css';
import Link from 'next/link';

interface NavBarProps {
  links: { href: string; label: string }[];
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>MyApp</div>
      <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.bar} />
        <div className={styles.bar} />
        <div className={styles.bar} />
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>
              <a className={styles.navLink}>{link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;