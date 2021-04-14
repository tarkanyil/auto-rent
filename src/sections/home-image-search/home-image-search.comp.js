import styles from './ImageSearch.module.scss';
import Image from 'next/image';

const ImageSearch = () => (
  <div className={styles.heroContainer}>
    <div className={styles.textContainer}>
      <h1 className={styles.textElement}>Exclusive drives, made simple.</h1>
      <h2 className={styles.textElement}>Book a classy time out with our premium fleet.</h2>
    </div>
  </div>
);

export default ImageSearch;
