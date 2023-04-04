import Link from 'next/link';
import styles from './navbar.module.css';
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbarContainer}>
                    <ul className={styles.navbarList}>
                        <li className={styles.navbarItem}>
                            <Link href={'/'} className={router.pathname === '/' ? styles.navbarLinkActive : styles.navbarLink}>
                                Home
                            </Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link href={'/about'} className={router.pathname === '/about' ? styles.navbarLinkActive : styles.navbarLink}>
                                Sobre
                            </Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <a href="#" className={styles.navbarLink}>Últimas Receitas</a>
                        </li>
                        <li className={styles.navbarItem}>
                            <a href="#" className={styles.navbarLink}>Ajude o Projeto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}