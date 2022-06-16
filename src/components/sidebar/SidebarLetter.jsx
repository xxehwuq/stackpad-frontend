import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styles from './Sidebar.module.sass'

function SidebarLetter({children}) {
    const to = "/u/notebooks/letter/" + children

    return (
        <Link className={styles.SidebarLetter} to={to}>{children}</Link>
    );
}

export default SidebarLetter;