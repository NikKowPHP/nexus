import React from 'react';
import styles from './NavBar.module.css';

interface NavBarProps {
  links?: string[];
  logo?: string;
}

const NavBar: React.FC<NavBarProps> = ({ links = [], logo }) => {
  return (
    <nav className={styles.navbar}>
      {logo && <img src={logo} alt="Logo" className={styles.logo} />}
      <ul className={styles.links}>
        {links.map((link, index) => (
          <li key={index} className={styles.linkItem}>
            <a href={`#${link.toLowerCase()}`} className={styles.link}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;