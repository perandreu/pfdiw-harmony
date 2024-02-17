import UserMenu from "../../components/UserMenu";
import DirectMessages from "../../components/DirectMessages";

function DirectMessagesView() {
    return(
        <div className="d-flex flex-column">
            <UserMenu />
            <DirectMessages />
        </div>
    )
}

export default DirectMessagesView;