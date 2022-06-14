import styles from './Sidebar.module.sass'

function SidebarGroup({children}) {
    return (
        <div className={styles.SidebarGroup}>{children}</div>
    );
}

export default SidebarGroup;