import { faComment, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";


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

    return(
        <div className="col-12 d-flex mb-2">
            <Button className="rounded-4 ms-3 me-3 w-100 d-flex align-items-center felx-row justify-content-between" size="lg" variant="outline-secondary" id={"friendButton"+user.id}>
                <div className="d-flex flex-row">
                    <img style={imageStyle} className="me-2 rounded-circle img-thumbnail" />
                    <div className="d-flex flex-column justify-content-start text-start">
                        <p className="m-0">{user.name}</p>
                        <p className="m-0 fs-6">{user.status}</p>
                    </div>
                </div>
                <div>
                    <Button className="rounded-circle me-2" style={{width: "40px", height: "40px"}} id={"friendChatButton"+user.id}>
                        <FontAwesomeIcon icon={faComment} />
                    </Button>
                    <Button className="rounded-circle" style={{width: "40px", height: "40px"}} id={"friendConfigButton"+user.id}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </Button>
                </div>
            </Button>
        </div>
    )
}

export default FriendButton;