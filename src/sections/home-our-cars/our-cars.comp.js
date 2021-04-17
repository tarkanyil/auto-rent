import styles from './OurCars.module.scss';

import Card from '../../components/card/card.comp';

const OurCars = () => {
  return (
    <div>
      <div className={styles.title}>
        <h1>Explore our cars</h1>
      </div>
      <div className={styles.cardCont}>
        <Card />
      </div> 
    </div>
  );
};

export default OurCars;
