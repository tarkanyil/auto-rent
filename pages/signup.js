import Head from 'next/head';

import Layout from '../src/components/layout/layout.comp';
import SignUpComp from '../src/components/sign-up/sign-up.comp';

const SignIn = () => {
  return (
    <Layout>
      <Head>
        <title>XiCars - Sign Up</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='limitWidth'>
        <div style={{ height: '200px' }} />
        <SignUpComp />
      </div>
    </Layout>
  );
};

export default SignIn;