// This component serves as a container to shrink the content
//to a given maximum height, giving option to show more or less with button control.
//height can be added to large (l/L) or small (s/S)

import { useState } from 'react';

import styles from './ShowHide.module.scss';

import Button from '@material-ui/core/Button';

const ShowHide = ({ height, children }) => {
  const [btnText, setBtnText] = useState('Show more');
  const [isFull, setIsFull] = useState(false);

  const handleShowMore = () => {
    setIsFull(!isFull);
    isFull ? setBtnText('Show more') : setBtnText('Show less');
  };

  let showHideCont = styles.showHideCont;
  if (!isFull) {
    if (height.toLowerCase() === 'l') {
      showHideCont = `${styles.showHideCont} ${styles.shrinkL}`;
    } else {
      showHideCont = `${styles.showHideCont} ${styles.shrinkS}`;
    }
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
