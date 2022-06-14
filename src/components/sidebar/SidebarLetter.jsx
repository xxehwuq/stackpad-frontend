import { Link } from 'react-router-dom';
import styles from './Sidebar.module.sass'

function SidebarLetter({children}) {
    return (
        <Link className={styles.SidebarLetter} to={"/u/notebooks/letter/" + children}>{children}</Link>
    );
}

export default SidebarLetter;