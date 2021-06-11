import Head from 'next/head';

import Layout from '../src/components/layout/layout.comp';
import SignInComp from '../src/components/sign-in/sing-in.comp';

const SignIn = () => {
  const createUserProfileDocument = () => {
    fetch('/api/temp/', {
      method: 'post',
      body: 'hello'
    }).then((res) => console.log(res));
  };

  createUserProfileDocument();

  return (
    <Layout>
      <Head>
        <title>XiCars - Sign In</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='limitWidth'>
        <div style={{ height: '200px' }} />
        <SignInComp />
      </div>
    </Layout>
  );
};

export default SignIn;
