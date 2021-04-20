import styles from './Footer.module.scss';
import { NavLink } from '../navbar/navbar.styles.jsx';


const Footer = () => {
  const actualYear = new Date().getFullYear();
  return (
    <div className='wide'>
      <div className={styles.container}>
        <div className={styles.menu}>
          <NavLink href='/' className={styles.menuItem}>Impressum</NavLink>
          <NavLink href='/' className={styles.menuItem}>Datenschutz</NavLink>
          <NavLink href='/' className={styles.menuItem}>AGB</NavLink>
          <NavLink href='/' className={styles.menuItem}>Sitemap</NavLink>
        </div>
        <p className={styles.copy}>
          &copy;{actualYear} XiCars | Made with{' '}
          <span className={styles.heart}>&#10084;</span> by <a href='#'>#laszlodev</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
