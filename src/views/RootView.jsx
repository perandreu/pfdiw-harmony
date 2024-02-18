import { Outlet } from "react-router-dom";
import ServerList from "../components/ServerList";
import UserInfo from '../components/UserInfo';
import DirectMessages from "../components/DirectMessages";

function RootView() {
    document.body.setAttribute('data-bs-theme', 'dark');

    return(
        <>
            <DirectMessages />
            
        </>
    )
}

export default RootView;