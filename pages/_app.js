import '../styles/globals.css';
import { ProvideAuth } from '../src/utils/auth';

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  );
}

export default MyApp;
