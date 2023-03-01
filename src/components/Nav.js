import { NavLink, Outlet } from 'react-router-dom';
import { GoPerson } from 'react-icons/go';
import styles from '../styles/Nav.module.css';

const Nav = () => (
  <>
    <div className={styles.nav}>
      <div className={styles.titleAndLinks}>
        <NavLink to="/" className={styles.navTitle}>Bookstore CMS</NavLink>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="/" className={styles.navLink}>
              Books
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="categories" className={styles.navLink}>
              Categories
            </NavLink>
          </li>
        </ul>
      </div>
      <GoPerson className={styles.navIcon} />
    </div>
    <Outlet />
  </>
);
export default Nav;
