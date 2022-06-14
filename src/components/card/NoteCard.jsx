import { Bookmark } from 'react-feather';
import { Link } from 'react-router-dom';
import styles from './Card.module.sass'

function NoteCard({to, title, children, isBookmarked, btnOnClick}) {
    return (
        <Link className={styles.Note} to={to}>
            <div className={styles.NoteHeader}>
                <div className={styles.NoteHeaderContent}>
                    <span className={styles.NoteHeaderContentTitle}>{title}</span>
                </div>
                <button className={isBookmarked ? `${styles.NoteHeaderButtonActive} ${styles.NoteHeaderButton}` : styles.NoteHeaderButton} onClick={btnOnClick}><Bookmark/></button>
            </div>
            <div className={styles.NoteText}>{children}</div>
        </Link>
    );
}
export default NoteCard;