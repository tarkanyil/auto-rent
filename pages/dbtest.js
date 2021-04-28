// import dbConnect from '../src/utils/dbConnect';
// import CarModel from '../src/models/Auto';
// import addNewCar from '../src/utils/addNewCar';
import Button from '@material-ui/core/Button';
import useSWR from 'swr';

import { carData } from '../src/utils/constants';

const DbTest = () => {

    const apiFetch = async () => {
      const response = await fetch('/api/createRecord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const myJson = await response.json(); //extract JSON from the http response
      console.log(myJson)
    }


  return (
    <div>
      <p> Database Test </p>{' '}
      {carData.map((car, idx) => (
        <p key={idx}> {car.name} </p>
      ))}{' '}
      <Button variant='contained' onClick={apiFetch}>Add record</Button>
    </div>
  );
};

// export const getStaticProps = async () => {
//   await dbConnect();

//   const result = await CarModel.find((err, docs) => {
//     if (err) {
//       console.log(err);
//     } else {
//       // console.log(docs);
//     }
//   });

//   const cars = result.map((doc) => {
//     const car = doc.toObject();
//     car._id = car._id.toString();
//     car.prices.forEach((item) => (item._id = item._id.toString()));
//     car.features._id = car.features._id.toString();
//     return car;
//   });

//   // add new car
//   // addNewCar();

//   return {
//     props: {
//       cars
//     }
//   };
// };

export default DbTest;
