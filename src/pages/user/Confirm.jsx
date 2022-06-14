import axios from "axios";
import { useEffect } from "react";

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

    return (<h1>Your account has been successfully confirmed!</h1>)
}

export default Confirm;