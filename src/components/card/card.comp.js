import styles from './Card.module.scss';

import Button from '@material-ui/core/Button';

import { carData } from '../../utils/constants';

const Card = () => {
  return (
    <div className={styles.cardCont}>
      {carData.map((car) => {
        return (
          <>
            <div className={styles.card}>
              <div className={styles.image}>
                <img src={car.imgUrl} alt='car photo' srcset='' />
              </div>
              <div className={styles.description}>
                <div className={styles.buttonCont}>
                  <Button className={styles.button} variant='contained'>
                    Explore now!
                  </Button>
                </div>
                <h3 className={styles.cardTitle}>{car.name}</h3>
                <div className={styles.divider}></div>
                <p className={styles.cardDesc}>{car.desc}</p>
              </div>
            </div>
            <div style={{ height: '20px' }}></div>
          </>
        );
      })}
    </div>
  );
};

export default Card;
