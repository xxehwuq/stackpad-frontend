import { Bookmark, BookOpen, LogOut } from 'react-feather';
import styles from './Sidebar.module.sass'
import SidebarItem from './SidebarItem'
import SidebarGroup from './SidebarGroup'

function Sidebar() {
    return (
        <div className={styles.Sidebar}>
            <SidebarGroup>
                <img className={styles.SidebarLogo} src='https://img.icons8.com/fluency/344/note.png' alt='logo'/>
                <SidebarItem to="notebooks"><BookOpen/></SidebarItem>
                <SidebarItem to="bookmarks"><Bookmark/></SidebarItem>
            </SidebarGroup>
            <SidebarGroup>
                <SidebarItem to="user/sign-out"><LogOut/></SidebarItem>
            </SidebarGroup>
        </div>
    );
}

export default Sidebar;