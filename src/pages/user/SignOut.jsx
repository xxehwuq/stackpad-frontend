import { Navigate } from "react-router-dom";

function SignOut() {
    localStorage.removeItem("token")

    return (
        <Navigate to="/" replace/>
    );
}

export default SignOut;