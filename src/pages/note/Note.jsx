import axios from "axios";
import { useEffect, useState } from "react";
import { Printer, Save, Trash2 } from "react-feather";
import { useParams } from "react-router-dom";
import Content from "../../components/content/Content";
import Editor from "../../components/editor/Editor";
import ErrorMessage from "../../components/error/ErrorMessage";

function Note() {
    const {noteId, notebookId} = useParams()
    const [noteTitle, setNoteTitle] = useState("...")
    const [noteText, setNoteText] = useState("")
    const [note, setNote] = useState()
    const [error, setError] = useState("")
    let keys = []
    const hotKey = "Control" 
    
    document.onkeydown = function(e){  
        if (e.key === " ") {
            saveNote()
        } else if (e.key === hotKey) {
            keys.push(e.key)
        } else if (e.key === "s") {
            let len = keys.push(e.key)
        
            if (keys[len-1] === "s" && keys[len-2]) {
                saveNote()
            }
        } else if (e.key === "p") {
            let len = keys.push(e.key)
        
            if (keys[len-1] === "p" && keys[len-2]) {
                window.location.href = "/u/print/" + noteId
            }
        }
    }

    const headers = {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }

    useEffect(() => {
        axios.get(process.env.REACT_APP_API + "/note/" + noteId, {headers}).then(res => {
            if (res.status === 200) {
                setNoteTitle(res.data.title)
                setNoteText(res.data.text)
                setNote(res.data)
            }
        }).catch(err => {
            if (err.response.status === 400) {
                setError(err.response.data)
            } else if (err.response.status === 401) {
                localStorage.removeItem("token")
                window.location.href = "/"
            }
        })
    }, [])

    function saveNote() {
        note.title = noteTitle
        note.text = noteText

        axios.put(process.env.REACT_APP_API + "/note", note, {headers}).catch(err => {
            if (err.response.status === 400) {
                console.log(err.response.data)
            } else if (err.response.status === 401) {
                localStorage.removeItem("token")
                window.location.href = "/"
            }
        })
    }

    function deleteNote() {
        axios.delete(process.env.REACT_APP_API + "/note/" + noteId, {headers}).then(res => {
            if (res.status === 200) {
                window.location.href = "/u/notebooks/" + notebookId
            }
        }).catch(err => {
            if (err.response.status === 400) {
                console.log(err.response.data)
            } else if (err.response.status === 401) {
                localStorage.removeItem("token")
                window.location.href = "/"
            }
        })
    }

    return (
        <Content title={noteTitle} header={
            <>
                <button onClick={() => deleteNote()}><Trash2/></button>
                <button onClick={() => window.location.href = "/u/print/" + noteId}><Printer/></button>
                <button onClick={() => saveNote()}><Save/></button>
            </>
        }>
            <ErrorMessage>{error}</ErrorMessage>
            <Editor 
                value={noteText}
                id="noteText"
                onChange={(e) => setNoteText(e.target.value)}
                style={{
                    fontFamily: 'Caveat, Menlo, monospace',
                    fontSize: "25px",
                }}
            />
        </Content>
    );
}

export default Note;