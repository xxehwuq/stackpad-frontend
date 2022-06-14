import styles from './Input.module.sass'

function Input({children, ...props}) {
    return (
        <label className={styles.Label}>
            <div className={styles.LabelText}>{children}</div>
            <input className={styles.LabelInput} {...props}/>
        </label>
    );
}

export default Input;