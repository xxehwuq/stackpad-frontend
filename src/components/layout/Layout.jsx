import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import styles from './Layout.module.sass'

function Layout() {
    if (!localStorage.getItem("token")) {
        window.location.href = "/"
    }

    return (
        <div className={styles.Layout}>
            <Sidebar/>
            <div className={styles.Content}>
                <Outlet/>
            </div>
        </div>
    );
}

export default Layout;