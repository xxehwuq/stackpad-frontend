import { FilePlus, Trash2 } from "react-feather";
import { useParams } from "react-router-dom";
import Content from "../../components/content/Content";
import NoteCard from "../../components/card/NoteCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Popup from "../../components/popup/Popup";
import Input from "../../components/input/Input";
import Center from "../../components/center/Center";
import ErrorMessage from "../../components/error/ErrorMessage";

function Notebook() {
    const {notebookId} = useParams()
    const [notebookTitle, setNotebookTitle] = useState("...")
    const [notes, setNotes] = useState([])
    const [error, setError] = useState("")

    const headers = {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }

    const newNoteData = {
        title: "",
        text: "",
        notebook_id: notebookId
    }
    
    useEffect(() => {
        axios.get(process.env.REACT_APP_API + "/notebook/" + notebookId, {headers}).then(res => {
            if (res.status === 200) {
                setNotebookTitle(res.data.title)
            }
        }).catch(err => {
            if (err.response.status === 400) {
                setError(err.response.data)
            } else if (err.response.status === 401) {
                localStorage.removeItem("token")
                window.location.href = "/"
            }
        })

        axios.get(process.env.REACT_APP_API + "/note/notebook/" + notebookId, {headers}).then(res => {
            if (res.status === 200) {
                setNotes(res.data)
            }
        }).catch(err => {
            if (err.response.status === 401) {
                localStorage.removeItem("token")
                window.location.href = "/"
            }
        })
    }, [])

    function createNote(e) {
        e.preventDefault()

        axios.post(process.env.REACT_APP_API + "/note", newNoteData, {headers}).then(res => {
            if (res.status === 200) {
                window.location.href += `/${res.data.id}`
            }
        }).catch(err => {
            if (err.response.status === 401) {
                localStorage.removeItem("token")
                window.location.href = "/"
            }
        })
    }

    function deleteNotebook() {
        axios.delete(process.env.REACT_APP_API + "/notebook/" + notebookId, {headers}).then(res => {
            if (res.status === 200) {
                window.location.href = "/u/notebooks"
            }
        }).catch(err => {
            if (err.response.status === 401) {
                localStorage.removeItem("token")
                window.location.href = "/"
            }
        })
    }

    function toBookmark(note, isBookmarked) {
        note.is_bookmarked = !isBookmarked

        axios.put(process.env.REACT_APP_API + "/note", note, {headers}).catch(err => {
            if (err.response.status === 400) {
                console.log(err.response.data)
            } else if (err.response.status === 401) {
                localStorage.removeItem("token")
                window.location.href = "/"
            }
        })
    }

    return (
        <Content title={notebookTitle} header={
            <>
                <button onClick={() => deleteNotebook()}><Trash2/></button>
                <Popup button={<FilePlus/>} title={"Нова нотатка"}>
                    <form onSubmit={(e) => createNote(e)}>
                        <Input type="text" children="Назва" onChange={(e) => {newNoteData.title = e.target.value}} placeholder="Назва вашої нотатки"/>
                        <Input type="submit" value="Створити"/>
                    </form>
                </Popup>
            </>
            
        }>
            <ErrorMessage>{error}</ErrorMessage>
            {notes.length !== 0 
                ? notes.map(note => <NoteCard to={note.id} title={note.title} isBookmarked={note.is_bookmarked} btnOnClick={() => toBookmark(note, note.is_bookmarked)} key={note.id}>{note.text}</NoteCard>)
                : <Center><img src="https://cdn-icons-png.flaticon.com/512/869/869078.png" style={{width: "150px"}}/><br/>You don't have any notes in <span style={{fontWeight: 600}}>{notebookTitle}</span></Center>
            }
        </Content>
    );
}

export default Notebook;