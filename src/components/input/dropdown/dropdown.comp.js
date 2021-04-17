import styles from './Dropdown.module.scss';

import { availableTimes } from '../../../utils/constants';

const Dropdown = ({ fromUntil,  }) => {
  return (
    <div className={styles.timeDropdown}>
      {availableTimes.map((time) => {
        return (
          <p
            className={styles.timeValue}
            onClick={() => handleDropdown('from', time)}>
            {time}
          </p>
        );
      })}
    </div>
  );
};

export default Dropdown;
