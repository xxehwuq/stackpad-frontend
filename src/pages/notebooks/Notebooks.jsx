import { FolderPlus } from "react-feather";
import Content from "../../components/content/Content";
import NotebookCard from "../../components/card/NotebookCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Popup from "../../components/popup/Popup";
import Center from "../../components/center/Center";
import Input from "../../components/input/Input"

function Notebooks() {
    const [notebooks, setNotebooks] = useState([])
    const [color, setColor] = useState("")

    const headers = {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }

    const newNotebookData = {
        title: "",
        color: color
    }

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

    function createNotebook(e) {
        e.preventDefault()

        if (!newNotebookData.color) {
            newNotebookData.color = randomColor()
        }

        axios.post(process.env.REACT_APP_API + "/notebook", newNotebookData, {headers}).then(res => {
            if (res.status === 200) {
                window.location.href += `/${res.data.id}`
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
        <Content title="Мої зошити" header={
            <Popup button={<FolderPlus/>} title="Новий зошит">
                <form onSubmit={(e) => createNotebook(e)}>
                    <Input type="text" children="Назва" onChange={(e) => {newNotebookData.title = e.target.value}} placeholder="Назва вашого зошита"/>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <Input type="text" children="Колір" onChange={(e) => {setColor(e.target.value)}} value={color} pattern="#[A-Za-z0-9]{6}" placeholder="Колір обкладинки (напр. #1e1e1e)"/>
                        <input type="color" value={color} onChange={(e) => {setColor(e.target.value)}}/>
                    </div>
                    <Input type="submit" value="Створити"/>
                </form>
            </Popup>
        }>
            {notebooks.length !== 0 
                ? notebooks.map(notebook => <NotebookCard to={notebook.id} title={notebook.title} color={notebook.color} key={notebook.id}/>) 
                : <Center><img src="https://cdn-icons-png.flaticon.com/512/869/869078.png" style={{width: "150px"}}/><br/>Ви не створили жодного зошита</Center>
            }
        </Content>
    );

    function randomColor() {
        var letters = "0123456789ABCDEF";
        var color = '#';
        for (var i = 0; i < 6; i++) {
           color += letters[(Math.floor(Math.random() * 16))]
        }

        return color
    }
}

export default Notebooks;