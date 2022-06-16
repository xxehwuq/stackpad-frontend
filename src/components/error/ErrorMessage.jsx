import styles from './Error.module.sass'

function ErrorMessage({children}) {
    if (children !== '') {
        return (
            <div className={styles.Error}>
                <img src="https://img.icons8.com/fluency/344/cancel.png"/>
                {children}
            </div>
        );
    }
}

export default ErrorMessage;