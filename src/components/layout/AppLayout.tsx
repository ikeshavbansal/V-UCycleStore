import { Outlet } from "react-router-dom"
import Header from '../Header/Header.jsx'

const AppLayout =()=>

    {
        return <>
        <Header/>
        <Outlet/>
        </>
    }

    export default AppLayout