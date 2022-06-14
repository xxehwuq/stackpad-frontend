import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input"

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
                console.log(err.response.data)
            }
        })
    }

    return (
        <Form title="Sign In" text={<span>Create new account - <Link to="/sign-up">Sign Up</Link></span>} onSubmit={(e) => signIn(e)}>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} minLength="3" placeholder="Email" required/>
            <Input type="password" onChange={(e) => setPassword(e.target.value)} minLength="3" placeholder="Password" required/>
            <Input type="submit" value="Sign In"/>
        </Form>
    );
}

export default SignIn;