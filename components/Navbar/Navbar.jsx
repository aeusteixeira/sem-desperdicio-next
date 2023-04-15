import Link from 'next/link';
import styles from './navbar.module.css';
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
    const savedRecipes = typeof window !== 'undefined' && localStorage.getItem('savedRecipes');

    return (
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
                        <Link href={'/my-recipes'} className={router.pathname === '/my-recipes' ? styles.navbarLinkActive : styles.navbarLink}>
                            Minhas Receitas { 
                                savedRecipes?.length > 0 && (
                                    <span className={styles.navbarLinkBadge}>
                                        {JSON.parse(savedRecipes).length}
                                    </span>
                                )
                            }
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
