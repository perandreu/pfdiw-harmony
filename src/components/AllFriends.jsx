import { faCircleUser, faComment, faEllipsisVertical, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, InputGroup, Table } from "react-bootstrap";

function AllFriends() {
    return(
        <div className="col-11 d-flex flex-column ps-3 pe-3">
            <InputGroup className="mb-3">
                <Form.Control 
                    placeholder="Buscar"
                />
                <Button variant="outline-secondary" id="search" >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button> 
            </InputGroup>

            <div className="position-relative">
                <hr className="my-4" />
                <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="fw-bold">Conectados - {"23"}</span>
                </div>
            </div>

            <div className="d-flex flex-row row">
                <div className="col-10">
                    <FontAwesomeIcon icon={faCircleUser} />
                </div>
                <div className="col-2">
                    <Button className="rounded-circle">
                        <FontAwesomeIcon icon={faComment} />
                    </Button>
                    <Button className="rounded-circle">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AllFriends;