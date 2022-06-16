import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/error/ErrorMessage";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input"

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const credentials = {
        email: email,
        password: password
    }

    function signIn(e) {
        e.preventDefault()
        axios.post(process.env.REACT_APP_API + "/user/sign-in", credentials).then(res => {
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
            <Form title="Вхід" text={<span>Створити новий обліковий запис - <Link to="/sign-up">Зареєструватися</Link></span>} onSubmit={(e) => signIn(e)}>
                <Input type="email" onChange={(e) => setEmail(e.target.value)} minLength="3" placeholder="Електронна пошта" required/>
                <Input type="password" onChange={(e) => setPassword(e.target.value)} minLength="3" placeholder="Пароль" required/>
                <Input type="submit" value="Увійти"/>
            </Form>
        </>
    );
}

export default SignIn;