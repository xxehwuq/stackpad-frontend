import Content from "../../components/content/Content";
import NoteCard from "../../components/card/NoteCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Center from "../../components/center/Center";
import { List } from "react-feather";
import { Link } from "react-router-dom";

function Bookmarks() {
    const [bookmarks, setBookmarks] = useState([])

    const headers = {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }

    useEffect(() => {
        axios.get(process.env.REACT_APP_API + "/note/bookmarks", {headers}).then(res => {
            if (res.status === 200) {
                setBookmarks(res.data)
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
        <Content title="Мої закладки" header={<button onClick={() => window.location.href = "/u/notebooks"}><List/></button>}>
            {bookmarks.length !== 0 
                ? bookmarks.map(bookmark => <NoteCard to={`/u/notebooks/${bookmark.notebook_id}/${bookmark.id}`} title={bookmark.title} isBookmarked={bookmark.is_bookmarked} btnOnClick={() => toBookmark(bookmark, bookmark.is_bookmarked)} key={bookmark.id}>{bookmark.text}</NoteCard>)
                : <Center><img src="https://cdn-icons-png.flaticon.com/512/869/869078.png" style={{width: "150px"}}/><br/>У вас немає закладок</Center>
            }
        </Content>
    );
}

export default Bookmarks;