import User from '../models/User';

const addNewUser = async ({ uid, nameFirst, nameLast, email }) => {
  // new user document
  const user = new User({
    uidFirebase: uid,
    nameFirst: nameFirst,
    nameLast: nameLast,
    phone: '+3630',
    email: email,
    dateOfBirth: '1983-06-17',
    driversLicence: {
      id: 'sadfasdf',
      isEuLicence: true
    },
    numberIdCard: 'dfrew3242',
    address: {
        street: 'Street',
        city: 'Köln',
        country: 'Germany',
        zipCode: '50677'
    }
  });
  user.save((err) => {
    if (err) return console.log(err);
    console.log('user saved!');
  });
};

export default addNewUser;