import { ChevronLeft } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import styles from './Content.module.sass'

function Content({title, header, children}) {
    const navigate = useNavigate();

    return (
        <div className={styles.Content}>
            <div className={styles.ContentHeader}>
                <button onClick={() => navigate(-1)}><ChevronLeft/></button>
                <div className={styles.ContentHeaderTitle}>{title}</div>
                <div className={styles.ContentHeaderButtons}>{header}</div>
            </div>
            <div className={styles.ContentInner}>{children}</div>
        </div>
    );
}

export default Content;