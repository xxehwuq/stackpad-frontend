import styles from "./Center.module.sass"

function Center({children}) {
    return (
        <div className={styles.Center}>{children}</div>
    );
}

export default Center;