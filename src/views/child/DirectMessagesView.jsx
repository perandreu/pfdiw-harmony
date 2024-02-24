import UserMenu from "../../components/UserMenu";
import DirectMessages from "../../components/DirectMessages";

function DirectMessagesView() {
    return(
        <div className="d-flex flex-column g-0 col-2">
            <UserMenu />
            <DirectMessages />
        </div>
    )
}

export default DirectMessagesView;