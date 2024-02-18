import { Outlet } from "react-router-dom";
import ServerList from "../components/ServerList";
import UserInfo from '../components/UserInfo';

function RootView() {
    document.body.setAttribute('data-bs-theme', 'dark');

    return(
        <>
            <div className="row g-0 mb-3 pb-2">
                <ServerList />
                <UserInfo />
            </div>
            <Outlet />
        </>
    )
}

export default RootView;