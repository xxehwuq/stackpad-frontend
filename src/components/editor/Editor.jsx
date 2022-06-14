import CodeEditor from '@uiw/react-textarea-code-editor';
import styles from './Editor.module.sass';

function Editor({...props}) {
    return (
        <CodeEditor
            className={styles.Editor}
            language="markdown"
            placeholder="Start typing..."
            padding={0}
            spellCheck
            {...props}
        />
    );
}

export default Editor;