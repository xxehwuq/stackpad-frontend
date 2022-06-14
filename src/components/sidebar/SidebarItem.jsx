import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styles from './Sidebar.module.sass'

function SidebarItem({children, to, ...props}) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: false });
    
    return (
        <Link className={match ? `${styles.SidebarItemActive} ${styles.SidebarItem}` : styles.SidebarItem} to={to} {...props}>{children}</Link>
    );
}

export default SidebarItem;