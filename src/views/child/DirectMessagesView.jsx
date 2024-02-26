import UserMenu from "../../components/UserMenu";
import DirectMessages from "../../components/DirectMessages";

const boxStyle = {
    height: '75vh'
}

function DirectMessagesView() {
    return(
        <div className="d-flex flex-column g-0 col-2" style={boxStyle}>
            <UserMenu />
            <DirectMessages />
        </div>
    )
}

export default DirectMessagesView;