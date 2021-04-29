import { useAuth } from '../../utils/auth';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const auth = useAuth();
  const router = useRouter();

  const handleSignIn = ({ email, password }) => {
    console.log('signIn');
    auth
      .signin(email, password)
      .then(() => {
        console.log('Log in successful');
        router.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      <input
        {...register('email')}
        placeholder='Email'
        type='email'
        name='email'
      />
      <input
        {...register('password')}
        placeholder='Password'
        type='password'
        name='password'
      />

      <button type='submit'>Sign In</button>
    </form>
  );
};

export default SignIn;
