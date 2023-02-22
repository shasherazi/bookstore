import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/Nav.module.css';

const Nav = () => (
  <>
    <div className={styles.nav}>
      <h1 className={styles.navTitle}>Bookstore CMS</h1>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>Books</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="categories" className={styles.navLink}>Categories</Link>
        </li>
      </ul>
    </div>
    <Outlet />
  </>
);
export default Nav;
