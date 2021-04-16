import styles from './Search.module.scss';
import Button from '@material-ui/core/Button';

import Input from '../input/input.comp';

const Search = () => (
  <div className={styles.container}>
    <Input />
    <div className={`${styles.buttonContainer} ${styles.item}`}>
      {' '}
      <Button className={styles.button} variant='contained'>Search for cars</Button>
    </div>
  </div>
);

export default Search;
