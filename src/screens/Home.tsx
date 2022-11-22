import { Outlet, useOutletContext } from "react-router-dom"

interface ILoginContext {
    Login : boolean
}

export default function Home() {
    const {Login} = useOutletContext<ILoginContext>();
    return Login? <h1>Home</h1> : <Outlet/>
}   