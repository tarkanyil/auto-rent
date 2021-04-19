import styles from './Layout.module.scss';
import Navbar from '../navbar/navbar.comp';
import Footer from '../footer/footer.comp';

const Layout = (props) => (
  <div className={styles.container} >
    <Navbar />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
