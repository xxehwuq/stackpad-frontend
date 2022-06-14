import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styles from './Sidebar.module.sass'

function SidebarLetter({children}) {
    const to = "/u/notebooks/letter/" + children
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: false });

    return (
        <Link className={match ? `${styles.SidebarLetter} ${styles.SidebarLetterActive}` : styles.SidebarLetter} to={to}>{children}</Link>
    );
}

export default SidebarLetter;