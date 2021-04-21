// test generated to experiment with server side rendering props

import { carData } from '../../src/utils/constants';

const Hello = ({ model, id, imgUrl, parameter }) => {

  return (
    <div>
      <h1>Car Test Page</h1>
      <p>{model}</p>
      <p>{id}</p>
      <p>{imgUrl}</p>
      <p>{parameter}</p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const parameter = context.params.cartest;

  const actualCar = carData.find((car) => car.id === parameter);

  const model = actualCar.name;
  const id = actualCar.id;
  const imgUrl = actualCar.imgUrl;

  return {
    props: {
      model,
      id,
      imgUrl,
      parameter
    }
  };
};

export default Hello;
