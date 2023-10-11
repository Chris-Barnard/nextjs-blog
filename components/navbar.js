import React, { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import utilStyles from '../styles/utils.module.css';

const MENU_LIST = [
    { text: "home", href: "/" },
    { text: "books", href: "/books"},
    { text: "about", href: "/about"},
];

const Navbar = ({ name, siteTitle, curPage }) => {
    const [dropdownActive, setDropdownActive] = useState(null);
    return (
        <div className={styles.navigationTop}>
          <nav className={styles.mainNavigation} role='navigation'>
            <Link href="/" className={styles.menuName}>{name}</Link>
            <Link href="/" className={styles.menuSiteTitle}>{siteTitle}</Link>
            <div
                className={`${styles.menuIcon} ${dropdownActive ? styles.menuIconActive : styles.menuIconInactive}`}
                onClick={() => setDropdownActive(!dropdownActive)}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`${styles.menuNavButtons} ${dropdownActive ? styles.menuNavButtonsActive : ""}`}>
                {MENU_LIST.map((menu) => (
                    <Link onClick={() => {setDropdownActive(false);}} key={menu.href} href={menu.href} className={curPage == menu.text ? styles.menuButtonSelected : styles.menuButton}>{menu.text}</Link>
                ))}
            </div>
          </nav>
        </div>
    );
};

export default Navbar;
