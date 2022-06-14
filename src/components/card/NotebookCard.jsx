import { Link } from 'react-router-dom';
import styles from './Card.module.sass'

function NotebookCard({to, title, color}) {
    const r = parseInt(color.substr(1,2), 16)
    const g = parseInt(color.substr(3,2), 16)
    const b = parseInt(color.substr(5,2), 16)

    const color1 = `${r}, ${g}, ${b}`
    const color2 = `${r-70}, ${g-70}, ${b-70}`
    const color3 = `${r-90}, ${g-90}, ${b-90}`
    const color4 = `${r-130}, ${g-130}, ${b-130}`

    return (
        <>
            <Link className={styles.Notebook} to={to} style={{
                background: `linear-gradient(135deg, rgb(${color1}) 0%, rgb(${color2}) 100%)` 
            }}>
                <div className={styles.NotebookContent} style={{color: `rgb(${color4})`}}>
                    <span className={styles.NotebookContentTitle} style={{color: `rgb(${color4})`}}>{title}</span>
                </div>
                <div className={styles.NotebookLine} style={{
                    backgroundColor: `rgb(${color3})`
                }}/>
            </Link>
        </>
    );
}

export default NotebookCard;