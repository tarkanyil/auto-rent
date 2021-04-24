import styles from './Layout.module.scss';
import Navbar from '../navbar/navbar.comp';
import Footer from '../footer/footer.comp';

const Layout = (props) => (
  <div className={styles.container}>
    <div className={styles.navCont}>
      <Navbar />
    </div>
    {props.children}
    <Footer />
  </div>
);

export default Layout;
