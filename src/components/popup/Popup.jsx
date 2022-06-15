import { X } from 'react-feather';
import styles from './Popup.module.sass'

function Popup({button, title, children}) {
    function showPopup() {
        document.getElementById("popup").style.display = "block"
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none"
    }

    return (
        <>
            <button className={styles.PopupButton} onClick={() => showPopup()}>{button}</button>
            <div className={styles.Popup} id={"popup"}>
                <div className={styles.PopupInner}>
                    <div className={styles.PopupInnerHeader}>
                        <span className={styles.PopupInnerHeaderTitle}>{title}</span>
                        <button onClick={() => closePopup()}><X/></button>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
}

export default Popup;