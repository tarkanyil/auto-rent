import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  const actualYear = new Date().getFullYear();
  return (
    <div className='wide'>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Link href='/'><p className={styles.menuItem}>Impressum</p></Link>
          <Link href='/'><p className={styles.menuItem}>Datenschutz</p></Link>
          <Link href='/'><p className={styles.menuItem}>AGB</p></Link>
          <Link href='/'><p className={styles.menuItem}>Sitemap</p></Link>
        </div>
        <p className={styles.copy}>
          &copy;{actualYear} XiCars | Made with{' '}
          <span className={styles.heart}>&#10084;</span> by #laszlodev
        </p>
      </div>
    </div>
  );
};

export default Footer;
