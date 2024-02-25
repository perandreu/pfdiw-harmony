import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, InputGroup } from "react-bootstrap";
import FriendButton from "./FriendButton";
import { exampleDirectMessages } from "../exampleResources/examples";

function AllFriends() {
    return(
        <div className="col-12 d-flex flex-column ps-5 pe-5">
            <InputGroup className="mb-3">
                <Form.Control 
                    placeholder="Buscar" title="Search Friend"
                />
                <Button variant="outline-secondary" id="search" >
                    <FontAwesomeIcon icon={faMagnifyingGlass} title="Search Friend" />
                </Button> 
            </InputGroup>

            <div className="position-relative mt-3">
                <hr className="my-4" />
                <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="fw-bold">Conectados - {"5"}</span>
                </div>
            </div>

            <div className="d-flex flex-row row">
                {
                    exampleDirectMessages.filter(obj => obj.type == "chat").map(obj => <FriendButton key={obj.id} user={obj} />)
                }
            </div>
        </div>
    )
}

export default AllFriends;