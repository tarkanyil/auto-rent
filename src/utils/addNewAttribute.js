import Attribute from '../models/Attribute';

const addNewAttribute = async () => {
  // new attribute document
  const attribute = new Attribute({
    type: 'feature',
    name: 'appleCarPlay',
    displayName: 'Apple Car Play',
    description: ''
  });
  attribute.save((err) => {
    if (err) return console.log(err);
    console.log('attribute saved!');
  });
};

export default addNewAttribute;