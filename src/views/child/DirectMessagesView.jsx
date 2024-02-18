import UserMenu from "../../components/UserMenu";
import DirectMessages from "../../components/DirectMessages";

function DirectMessagesView() {
    return(
        <div className="col-2 bg-success">
            <UserMenu />
            <DirectMessages />
        </div>
    )
}

export default DirectMessagesView;