import dbConnect from '../src/utils/dbConnect';
import CarModel from '../src/models/Auto';
import addNewCar from '../src/utils/addNewCar';

import { carData } from '../src/utils/constants';

const DbTest = ({ cars }) => {
  return (
    <div>
      <p> Database Test </p>{' '}
      {cars.map((car, idx) => (
        <p key={idx}> {car.model} </p>
      ))}{' '}
    </div>
  );
};

export const getStaticProps = async () => {
  await dbConnect();

  const result = await CarModel.find((err, docs) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(docs);
    }
  });

  const cars = result.map((doc) => {
    const car = doc.toObject();
    car._id = car._id.toString();
    car.prices.forEach((item) => (item._id = item._id.toString()));
    car.features._id = car.features._id.toString();
    return car;
  });

  // add new car
  // addNewCar();

  return {
    props: {
      cars
    }
  };
};

//   export const getStaticPaths = async () => {
//     const paths = carData.map(car => {
//       const carId = car.id;
//       return {params: {carId}};
//     });
//     return {paths, fallback: true};
//   }

export default DbTest;
