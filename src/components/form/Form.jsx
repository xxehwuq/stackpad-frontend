import styles from "./Form.module.sass"

function Form({title, children, text, ...props}) {
    return (
        <form className={styles.Form} {...props}>
            <h2 className={styles.FormTitle}>{title}</h2>
            <div className={styles.FormInner}>
                {children}
                <span className={styles.FormInnerText}>{text}</span>
            </div>
        </form>
    );
}

export default Form;