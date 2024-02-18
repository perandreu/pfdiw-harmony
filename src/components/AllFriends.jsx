import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, InputGroup } from "react-bootstrap";
import FriendButton from "./FriendButton";

const user = {
    name: "Juan",
    status: "Jugando a Baldurs Gates 3",
    id: 1253124
};

function AllFriends() {
    return(
        <div className="col-11 d-flex flex-column ps-5 pe-5">
            <InputGroup className="mb-3">
                <Form.Control 
                    placeholder="Buscar"
                />
                <Button variant="outline-secondary" id="search" >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button> 
            </InputGroup>

            <div className="position-relative mt-3">
                <hr className="my-4" />
                <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="fw-bold">Conectados - {"23"}</span>
                </div>
            </div>

            <div className="d-flex flex-row row">
                <FriendButton user={user}/>
                <FriendButton user={user}/>
                <FriendButton user={user}/>
            </div>
        </div>
    )
}

export default AllFriends;