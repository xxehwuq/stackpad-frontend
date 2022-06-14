import { Outlet } from 'react-router-dom';
import Center from '../center/Center';
import styles from './Layout.module.sass'

function LayoutCenter() {
    return (
        <Center>
            <div className={styles.LayoutCenterInner}><Outlet/></div>
        </Center>
    );
}

export default LayoutCenter;