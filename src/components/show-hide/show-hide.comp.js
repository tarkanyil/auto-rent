import { useState } from 'react';

import styles from './ShwoHide.module.scss';

import Button from '@material-ui/core/Button';

const ShowHide = ({ children }) => {
  const [btnText, setBtnText] = useState('Show more');
  const [isFull, setIsFull] = useState(false);

  const handleShowMore = () => {
    setIsFull(!isFull);
    isFull ? setBtnText('Show more') : setBtnText('Show less');
  };

  const maxHeight = '6rem';

  let showHideCont = styles.showHideCont;
  if (!isFull) {
    showHideCont = `${styles.showHideCont} ${styles.shrink}`;
  }

  return (
    <div>
      <div className={showHideCont}>
        {children}
        {!isFull && <div className={styles.showHideFade} />}
      </div>

      <Button
        className={styles.moreButton}
        variant='outlined'
        onClick={handleShowMore}>
        {btnText}
      </Button>
    </div>
  );
};

export default ShowHide;
