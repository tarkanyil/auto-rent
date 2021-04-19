import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  const actualYear = new Date().getFullYear();
  return (
    <div className='wide'>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Link href='/'>Impressum</Link>
          <Link href='/'>Datenschutz</Link>
          <Link href='/'>AGB</Link>
          <Link href='/'>Sitemap</Link>
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
