import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "../../components/editor/Editor";

function NotePrint() {
    const navigate = useNavigate();
    const {noteId} = useParams()
    const [noteTitle, setNoteTitle] = useState("")
    const [noteText, setNoteText] = useState("")

    const headers = {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }

    useEffect(() => {
        axios.get(process.env.REACT_APP_API + "/note/" + noteId, {headers}).then(res => {
            if (res.status === 200) {
                setNoteText(res.data.text)
                setNoteTitle(res.data.title)
                setTimeout(() => {
                    window.print()
                    navigate(-1)
                }, 500)
            }
        }).catch(err => {
            if (err.response.status === 401) {
                localStorage.removeItem("token")
                window.location.href = "/"
            }
        })
    }, [])

    return (
        <>
            <br/>
            <h2>{noteTitle}</h2>
            <br/><hr/><br/>
            <Editor 
                value={noteText}
                style={{
                    fontFamily: 'Caveat, Menlo, monospace',
                    fontSize: "25px",
                }}
                disabled
            />
        </>
    );
}

export default NotePrint;