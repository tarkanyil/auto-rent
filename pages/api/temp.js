import addNewUser from '../../src/utils/addNewUser';

export default async (req, res) => {


  await addNewUser({ uid:'uiiiidddd', email:'la@la.la', nameFirst:'Förszt', nameLast:'Laszt'});

  res.json({ message: 'helllooooo'});
};
