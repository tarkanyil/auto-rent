import styles from './Search.module.scss';
import Button from '@material-ui/core/Button';

import DatePicker from '../datepicker/datepicker.comp';

const Search = () => (
  <div className={`${styles.container} ${styles.item}`}>
    {/* <div className={`${styles.fromDate} ${styles.item}`}></div>
    <div className={`${styles.untilDate} ${styles.item}`}></div>
    <div className={`${styles.buttonContainer} ${styles.item}`}>
      {' '}
      <Button>Search for cars</Button>
    </div> */}
    <DatePicker />
  </div>
);

export default Search;
