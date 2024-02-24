import UserMessageView from "./child/UserMessageView";
import GroupMessageView from "./child/GroupMessageView";
import FriendsView from "./child/FriendsView";
import DirectMessagesView from "./child/DirectMessagesView";
import { useParams } from "react-router-dom";


function selectView(type,id) {
    switch(type) {
        case "chat":
            return <UserMessageView id={id} />
        case "group":
            return <GroupMessageView />
        case "friends":
            return <FriendsView />
    }
}


function PersonalView({ type, id }) {
  
    return(
        <div className="row g-0 w-100">
            {selectView(type,id)}
            <DirectMessagesView />
        </div>

    )
}

export default PersonalView;