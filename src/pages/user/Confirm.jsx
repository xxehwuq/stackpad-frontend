import axios from "axios";
import { useEffect } from "react";
import Center from "../../components/center/Center";

function Confirm() {
    const headers = {
        "Authorization": "Bearer " + localStorage.getItem("token")
    }

    useEffect(() => {
        axios.get(process.env.REACT_APP_API + "/user/confirm", {headers}).catch(err => {
            if (err.response.status !== 200) {
                localStorage.removeItem("token")
                window.location.href = "/"
            }
        })
    }, [])

    return (
        <Center><img src="https://img.icons8.com/fluency/344/verified-account.png" style={{width: "150px"}}/><br/><h1>Вашу електронну пошту<br/>успішно підтверджено!</h1></Center>
    )
}

export default Confirm;