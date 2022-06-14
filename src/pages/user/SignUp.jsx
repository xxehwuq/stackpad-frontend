import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input"

function SignUp() {
    const [name, setName] = useState("")    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
                console.log(err.response.data)
            }
        })
    }

    return (
        <Form title="Sign Up" text={<span>Sign in account - <Link to="/">Sign In</Link></span>} onSubmit={(e) => signUp(e)}>
            <Input type="text" onChange={(e) => setName(e.target.value)} minLength="2" placeholder="Name" required/>
            <Input type="email" onChange={(e) => setEmail(e.target.value)} minLength="3" placeholder="Email" required/>
            <Input type="password" onChange={(e) => setPassword(e.target.value)} minLength="3" placeholder="Password" required/>
            <Input type="submit" value="Sign Up"/>
        </Form>
    );
}

export default SignUp;