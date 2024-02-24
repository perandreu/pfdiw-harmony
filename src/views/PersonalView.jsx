import UserMessageView from "./child/UserMessageView";
import GroupMessageView from "./child/GroupMessageView";
import FriendsView from "./child/FriendsView";
import DirectMessagesView from "./child/DirectMessagesView";


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
  
    return(
        <div className="row g-0 w-100">
            {selectView(type)}
            <DirectMessagesView />
        </div>

    )
}

export default PersonalView;