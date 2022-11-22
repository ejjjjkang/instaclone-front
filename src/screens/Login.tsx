import { isLoginVar } from "../apollo";

export default function Login() {
    return (
        <div>
            <h1>Instagram</h1>
            
            <form>
                <input type="text" placeholder="Username" name="username" />
                <input type="password" placeholder="Password" name="password"/>
            </form>
             <div></div>
            <span>Or</span>
            <div></div>
            <div>
                <span>Don't have an account?</span>
                <button onClick={() => isLoginVar(true)}>
                Login is now
                </button>
            </div>
        </div>
    )
}