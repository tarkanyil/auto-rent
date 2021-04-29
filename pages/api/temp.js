import SignUp from '../../src/components/sign-up/sign-up.comp';

export default async (req, res) => {


SignUp.handleSignUp();

  res.send('hello');
};
