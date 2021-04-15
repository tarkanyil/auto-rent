import styles from './ImageSearch.module.scss';
import Image from 'next/image';

import Search from '../../components/search/search.comp';

const ImageSearch = () => (
  <div className={styles.heroContainer}>
    <div className={styles.textContainer}>
      <h1 className={styles.textElement}>Exclusive drives, made simple.</h1>
      <h2 className={styles.textElement}>
        Book a classy time out with our premium fleet.
      </h2>
      <Search />
    </div>
  </div>
);

export default ImageSearch;
