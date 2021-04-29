import { useAuth } from '../../utils/auth';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const auth = useAuth();
  const router = useRouter();

  const handleSignUp = ({ email, password }) => {
    auth
      .signup(email, password)
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
