import styles from './Layout.module.scss';
import Navbar from '../navbar/navbar.comp';

const Layout = (props) => (
  <div className={styles.container} >
    <Navbar />
    {props.children}
  </div>
);

export default Layout;
