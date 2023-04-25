import { signInWithGoogle } from "../utils/firebase";

const Login = () => {
    return (
        <div>
            <button className="button" onClick={signInWithGoogle}>Sign in with Google!</button>
        </div>
    )
}

export default Login;