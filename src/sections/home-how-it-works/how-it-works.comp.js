import styles from './HowItWorks.module.scss';
import CarIcon from '@material-ui/icons/DriveEta';
import BookingIcon from '@material-ui/icons/Assignment';
import TravelIcon from '@material-ui/icons/CardTravel';

const HowItWorks = () => {
  return (
    <div className={styles.cont}>
      {' '}
      <h1 className={styles.title}>How it works</h1>
      <div className={styles.items}>
        <div className={styles.item}>
          <CarIcon color='primary' className={styles.icon} />
          <p className={styles.head}>Find the perfect car.</p>
          <p className={styles.desc}>
            Choose the perfect car for your trip from our premium fleet.
          </p>
        </div>
        <div className={styles.item}>
          <BookingIcon color='primary' className={styles.icon} />
          <p className={styles.head}>Book your trip.</p>
          <p className={styles.desc}>
            Reserve your car hassle-free online, directly on our website.
          </p>{' '}
        </div>
        <div className={styles.item}>
          <TravelIcon color='primary' className={styles.icon} />
          <p className={styles.head}>Enjoy the ride.</p>
          <p className={styles.desc}>
            Pick your car up from us and enjoy your trip. It will be a memorable
            one.
          </p>{' '}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
