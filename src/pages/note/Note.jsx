import axios from "axios";
import { useEffect, useState } from "react";
import { Printer, Save, Trash2 } from "react-feather";
import { useParams } from "react-router-dom";
import Content from "../../components/content/Content";
import Editor from "../../components/editor/Editor";

function Note() {
    const {noteId, notebookId} = useParams()
    const [noteTitle, setNoteTitle] = useState("...")
    const [noteText, setNoteText] = useState("")
    const [note, setNote] = useState()
    let keys = []

    document.onkeydown = function(e){                
        if (e.key === "Control") {
            keys.push(e.key)
        } else if (e.key === "s") {
            let len = keys.push(e.key)
        
            if (keys[len-1] === "s" && keys[len-2]) {
                saveNote()
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
            if (err.response.status === 401) {
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
                console.log(err.response.status)
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
                console.log(err.response.status)
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