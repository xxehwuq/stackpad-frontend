import Content from "../../components/content/Content";
import NotebookCard from "../../components/card/NotebookCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Center from "../../components/center/Center";
import { useParams } from "react-router-dom";

function NotebooksLetter() {
    const {letter} = useParams()
    const [notebooks, setNotebooks] = useState([])
    let sortedNotebooks = []

    const headers = {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }

    notebooks.map(notebook => 
        (notebook.title.charAt(0) === letter || notebook.title.charAt(0) === letter.toUpperCase() || notebook.title.charAt(0) === letter.toLowerCase()) 
            ? sortedNotebooks.push(notebook)
            : null
    )

    useEffect(() => {
        axios.get(process.env.REACT_APP_API + "/notebook", {headers}).then(res => {
            if (res.status === 200) {
                setNotebooks(res.data)
            }
        }).catch(err => {
            if (err.response.status === 401) {
                localStorage.removeItem("token")
                window.location.href = "/"
            }
        })
    }, [])

    return (
        <Content title="My Notebooks" header={""}>
            {sortedNotebooks.length !== 0 
                ? sortedNotebooks.map(notebook => <NotebookCard to={"/u/notebooks/" + notebook.id} title={notebook.title} color={notebook.color} key={notebook.id}/>) 
                : <Center><img src="https://cdn-icons-png.flaticon.com/512/869/869078.png" style={{width: "150px"}}/><br/>You don't have any notebooks beginning with the letter <span style={{fontWeight: 600}}>{letter.toUpperCase()}</span></Center>
            }
        </Content>
    );
}

export default NotebooksLetter;