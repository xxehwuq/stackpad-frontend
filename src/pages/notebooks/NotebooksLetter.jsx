import Content from "../../components/content/Content";
import NoteCard from "../../components/card/NoteCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Center from "../../components/center/Center";
import { useParams } from "react-router-dom";
import { List } from "react-feather";

function NotebooksLetter() {
    const {letter} = useParams()
    const [notes, setNotes] = useState([])
    let sortedNotes = []

    const headers = {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }

    notes.map(note => 
        (note.title.charAt(0) === letter || note.title.charAt(0) === letter.toUpperCase() || note.title.charAt(0) === letter.toLowerCase()) 
            ? sortedNotes.push(note)
            : null
    )

    useEffect(() => {
        axios.get(process.env.REACT_APP_API + "/note", {headers}).then(res => {
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
        <Content title="Мої нотатки" header={<button onClick={() => window.location.href = "/u/notebooks"}><List/></button>}>
            {sortedNotes.length !== 0 
                ? sortedNotes.map(note => <NoteCard to={"/u/notebooks/" + note.notebook_id + "/" + note.id} title={note.title} isBookmarked={note.is_bookmarked} btnOnClick={() => toBookmark(note, note.is_bookmarked)} key={note.id}>{note.text}</NoteCard>) 
                : <Center><img src="https://cdn-icons-png.flaticon.com/512/869/869078.png" style={{width: "150px"}}/><br/>У вас немає нотаток, які починаються на букву <span style={{fontWeight: 600}}>{letter.toUpperCase()}</span></Center>
            }
        </Content>
    );
}

export default NotebooksLetter;