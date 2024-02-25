import { faComment, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function FriendButton({ user }) {
    const imageStyle = {
        backgroundImage: `url("${user.img}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: '',
    
        minWidth: '50px',
        width: '50px',
        height: '50px'
    }
    const navigate = useNavigate();

    const chatHandeler = () => {
        navigate("/me/chat/"+user.id);
    }

    return(
        <div className="col-12 d-flex mb-2">
            <div className="rounded-4 ms-3 me-3 w-100 d-flex align-items-center flex-row justify-content-between border border-secondary p-3">
                <div className="d-flex flex-row">
                    <div style={imageStyle} className="me-2 rounded-circle img-thumbnail" />
                    <div className="d-flex flex-column justify-content-start text-start">
                        <p className="m-0">{user.name}</p>
                        <p className="m-0 fs-6">{user.status}</p>
                    </div>
                </div>
                <div>
                    <Button className="rounded-circle me-2" style={{width: "40px", height: "40px"}} id={"friendChatButton"+user.id} onClick={chatHandeler} title="Show Chat">
                        <FontAwesomeIcon icon={faComment} />
                    </Button>
                    <Button className="rounded-circle" style={{width: "40px", height: "40px"}} id={"friendConfigButton"+user.id} title="Friend Options">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FriendButton;