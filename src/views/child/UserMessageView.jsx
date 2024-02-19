import OptionsBar from "../../components/OptionsBar";
import MessageInput from "../../components/MessageInput";
import ContentMessage from "../../components/ContentMessage";

function UserMessageView() {
    return(
        <div className='row col-10 g-0'>
            <OptionsBar type="user" />
            <div className="col-11 d-flex flex-column justify-content-between">
                <div className="bg-danger">asd</div>
                <div className="bg-info">asd</div>
            </div>
        </div>
    )
}

export default UserMessageView;