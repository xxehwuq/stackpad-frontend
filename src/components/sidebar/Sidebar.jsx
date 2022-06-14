import { Bookmark, BookOpen, LogOut } from 'react-feather';
import styles from './Sidebar.module.sass'
import SidebarItem from './SidebarItem'
import SidebarGroup from './SidebarGroup'
import SidebarLetter from './SidebarLetter';

function Sidebar() {
    return (
        <div className={styles.Sidebar}>
            <SidebarGroup>
                <img className={styles.SidebarLogo} src='https://img.icons8.com/fluency/344/note.png' alt='logo'/>
                <SidebarItem to="notebooks"><BookOpen/></SidebarItem>
                <SidebarItem to="bookmarks"><Bookmark/></SidebarItem>
            </SidebarGroup>
            <SidebarGroup>
                <SidebarLetter>a</SidebarLetter>
                <SidebarLetter>b</SidebarLetter>
                <SidebarLetter>c</SidebarLetter>
                <SidebarLetter>d</SidebarLetter>
                <SidebarLetter>e</SidebarLetter>
                <SidebarLetter>f</SidebarLetter>
                <SidebarLetter>g</SidebarLetter>
                <SidebarLetter>h</SidebarLetter>
                <SidebarLetter>i</SidebarLetter>
                <SidebarLetter>j</SidebarLetter>
                <SidebarLetter>k</SidebarLetter>
                <SidebarLetter>l</SidebarLetter>
                <SidebarLetter>m</SidebarLetter>
                <SidebarLetter>n</SidebarLetter>
                <SidebarLetter>o</SidebarLetter>
                <SidebarLetter>p</SidebarLetter>
                <SidebarLetter>q</SidebarLetter>
                <SidebarLetter>r</SidebarLetter>
                <SidebarLetter>s</SidebarLetter>
                <SidebarLetter>t</SidebarLetter>
                <SidebarLetter>u</SidebarLetter>
                <SidebarLetter>v</SidebarLetter>
                <SidebarLetter>w</SidebarLetter>
                <SidebarLetter>x</SidebarLetter>
                <SidebarLetter>y</SidebarLetter>
                <SidebarLetter>z</SidebarLetter>
            </SidebarGroup>
            <SidebarGroup>
                <SidebarItem to="user/sign-out"><LogOut/></SidebarItem>
            </SidebarGroup>
        </div>
    );
}

export default Sidebar;