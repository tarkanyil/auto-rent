import Button from '@material-ui/core/Button';
import Link from 'next/link';
import styles from './Card.module.scss';

const Card = ({ cars }) => {
  return (
    <div className={styles.cardCont}>
      {cars.map((car, idx) => {
        return (
          <div key={idx} className={styles.card}>
            <div className={styles.image}>
              <img
                src={car.image}
                alt='car photo'
                layout='fill'
                objectfit='contain'
              />
            </div>
            <div className={styles.description}>
              <div className={styles.buttonCont}>
                <Link href={`/cars/${car.path}`}>
                  <Button className={styles.button} variant='contained'>
                    Explore now!
                  </Button>
                </Link>
              </div>
              <h3 className={styles.cardTitle}>
                {car.brand} {car.model}
              </h3>
              <div className={styles.divider}></div>
              <p className={styles.cardDesc}>Some cool text :)</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
