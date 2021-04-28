import dbConnect from '../../src/utils/dbConnect';
import addNewCar from '../../src/utils/addNewCar';
import addNewAttribute from '../../src/utils/addNewAttribute';
import mongoose from 'mongoose';

export default async (req, res) => {
  await dbConnect();
  console.log('DB connection state: ', mongoose.connection.readyState);

  const closeConnection = () => {
    mongoose.disconnect();
    closeMessage = 'database connection closed';
  };



  try {
    await addNewCar();
    res.send({ posted: true });
  } catch (err) {
    console.log(err);
  }
  
};
