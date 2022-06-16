import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/error/ErrorMessage";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input"

function SignUp() {
    const [name, setName] = useState("")    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const credentials = {
        name: name,
        email: email,
        password: password
    }

    function signUp(e) {
        e.preventDefault()
        axios.post(process.env.REACT_APP_API + "/user/sign-up", credentials).then(res => {
            if (res.status === 200) {
                localStorage.setItem("token", res.data.token)
                window.location.href = "/u/notebooks"
            }
        }).catch(err => {
            if (err.response.status === 400) {
                setError(err.response.data)
            }
        })
    }

    return (
        <>
            <ErrorMessage>{error}</ErrorMessage>
            <Form title="Реєстрація" text={<span>Увійти в існуючий обліковий запис - <Link to="/">Увійти</Link></span>} onSubmit={(e) => signUp(e)}>
                <Input type="text" onChange={(e) => setName(e.target.value)} minLength="2" placeholder="Ім'я" required/>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} minLength="3" placeholder="Електронна пошта" required/>
                <Input type="password" onChange={(e) => setPassword(e.target.value)} minLength="3" placeholder="Пароль" required/>
                <Input type="submit" value="Зареєструватися"/>
            </Form>
        </>
    );
}

export default SignUp;