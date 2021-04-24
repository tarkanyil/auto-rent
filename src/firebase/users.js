import { firestore } from './firebase.utils';

const getUsers = async () => {
  const snapshot = await firestore.collection('users').get();
  snapshot.docs.forEach(doc => console.log(docs.data()));
};

export { getUsers };
