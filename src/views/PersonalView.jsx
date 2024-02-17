import UserMessageView from "./child/UserMessageView";
import GroupMessageView from "./child/GroupMessageView";
import FriendsView from "./child/FriendsView";
import DirectMessagesView from "./child/DirectMessagesView";
import { useParams } from "react-router-dom";


function selectView(type) {
    switch(type) {
        case "chat":
            return <UserMessageView />
        case "group":
            return <GroupMessageView />
        case "friends":
            return <FriendsView />
    }
}


function PersonalView({ type }) {
    const { id } =  useParams();
    return(
        <div className="d-flex flex-row">
            {selectView(type)}
            <DirectMessagesView />
        </div>

    )
}

export default PersonalView;