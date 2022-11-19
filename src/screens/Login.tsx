import { isLoginVar } from "../apollo";

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => isLoginVar(true)}>
                Login is now
            </button>
        </div>
    )
}