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
                <SidebarLetter>а</SidebarLetter>
                <SidebarLetter>б</SidebarLetter>
                <SidebarLetter>в</SidebarLetter>
                <SidebarLetter>г</SidebarLetter>
                <SidebarLetter>ґ</SidebarLetter>
                <SidebarLetter>д</SidebarLetter>
                <SidebarLetter>е</SidebarLetter>
                <SidebarLetter>є</SidebarLetter>
                <SidebarLetter>ж</SidebarLetter>
                <SidebarLetter>з</SidebarLetter>
                <SidebarLetter>и</SidebarLetter>
                <SidebarLetter>і</SidebarLetter>
                <SidebarLetter>ї</SidebarLetter>
                <SidebarLetter>й</SidebarLetter>
                <SidebarLetter>к</SidebarLetter>
                <SidebarLetter>л</SidebarLetter>
                <SidebarLetter>м</SidebarLetter>
                <SidebarLetter>н</SidebarLetter>
                <SidebarLetter>о</SidebarLetter>
                <SidebarLetter>п</SidebarLetter>
                <SidebarLetter>р</SidebarLetter>
                <SidebarLetter>с</SidebarLetter>
                <SidebarLetter>т</SidebarLetter>
                <SidebarLetter>у</SidebarLetter>
                <SidebarLetter>ф</SidebarLetter>
                <SidebarLetter>х</SidebarLetter>
                <SidebarLetter>ц</SidebarLetter>
                <SidebarLetter>ч</SidebarLetter>
                <SidebarLetter>ш</SidebarLetter>
                <SidebarLetter>щ</SidebarLetter>
                <SidebarLetter>ю</SidebarLetter>
                <SidebarLetter>я</SidebarLetter>
            </SidebarGroup>
            <SidebarGroup>
                <SidebarItem to="user/sign-out"><LogOut/></SidebarItem>
            </SidebarGroup>
        </div>
    );
}

export default Sidebar;