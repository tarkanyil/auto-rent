import { useAuth } from '../../utils/auth';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import dbConect from '../../utils/dbConnect';
import addNewUser from '../../utils/addNewUser';
import dbConnect from '../../utils/dbConnect';

const SignUp = async () => {
  const { register, handleSubmit } = useForm();

  const auth = useAuth();
  const router = useRouter();

  const createUserProfileDocument = ({ body }) => {
    fetch('/api/temp/', {
      method: 'post',
      body: 'hello'
    }).then((res) => console.log(res));
  };

  const handleSignUp = ({ email, password, nameFirst, nameLast }) => {
    auth
      .signup(email, password)
      .then(() => {
        // new instance on avDB is created here

        addNewUser({
          uid: auth.uid,
          email: email,
          nameFirst: nameFirst,
          nameLast: nameLast
        });
        console.log('avDB instance created');
      })
      .then(() => {
        console.log('Account is created');
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <input
        {...register('nameFirst')}
        placeholder='First name...'
        type='nameFirst'
        name='nameFirst'
      />

      <input
        {...register('nameLast')}
        placeholder='Last name...'
        type='nameLast'
        name='nameLast'
      />
      <p>Name as on driver's licence</p>
      <input
        {...register('email')}
        placeholder='Email...'
        type='email'
        name='email'
      />
      <input
        {...register('password')}
        placeholder='Password...'
        type='password'
        name='password'
      />
      <input
        {...register('confirmPassword')}
        placeholder='Confirm password...'
        type='password'
        name='confirmPassword'
      />

      <button type='submit'>Sign In</button>
    </form>
  );
};

export default SignUp;
