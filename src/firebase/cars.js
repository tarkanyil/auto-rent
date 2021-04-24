import { firestore } from './firebase.utils';

const getCars = async () => {
  const snapshot = await firestore.collection('cars').get();
  snapshot.docs.forEach(doc => console.log(doc.data()));
//   return snapshot;
};

export { getCars };