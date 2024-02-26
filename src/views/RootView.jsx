import { Outlet } from "react-router-dom";
import ServerList from "../components/ServerList";
import UserInfo from '../components/UserInfo';

function RootView() {
    document.body.setAttribute('data-bs-theme', 'dark');

    return(
        <div className="vh-100 d-flex flex-column">
            <div className="g-0 pb-2 d-flex flex-row flex-wrap justify-content-between">
                <ServerList />
                <UserInfo />
            </div>
            <hr />
            <Outlet />
        </div>
    )
}

export default RootView;