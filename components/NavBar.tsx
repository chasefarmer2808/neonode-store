import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from './Icon';
import styles from './NavBar.module.css';
import { useRouter } from 'next/dist/client/router';

export const NavBar: React.FC = () => {
    const router = useRouter();
    const [active, setActiveState] = useState(false);

    const toggleMenu = () => setActiveState(prev => !prev);

    return (
        <nav>
            <div className={styles.hamburgerContainer}>
                <button className="icon" onClick={toggleMenu}>
                    <Icon name="hamburger" />
                </button>
            </div>
            <div className={active ? `${styles.linksContainer} ${styles.mobile}` : styles.linksContainer}>
                    <Link href="/">
                        <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
                    </Link>
                    <Link href="/projects">
                        <a className={router.pathname === '/projects' ? 'active' : ''}>Projects</a>
                    </Link>
                    <Link href="/pricing">
                        <a className={router.pathname === '/pricing' ? 'active' : ''}>Pricing</a>
                    </Link>
            </div>
        </nav>
    )
}