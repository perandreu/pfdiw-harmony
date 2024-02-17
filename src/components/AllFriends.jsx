import { faCircleUser, faComment, faEllipsisVertical, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, InputGroup, Table } from "react-bootstrap";

function AllFriends() {
    return(
        <div className="d-flex flex-column w-25">
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


            <Table >
                <thead>
                    <tr>
                        <th>Conectados - {"23"}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </td>
                        <td>
                            <Button variant="secondary" className="rounded-circle me-2">
                                <FontAwesomeIcon icon={faComment} />
                            </Button>
                            <Button variant="secondary" className="rounded-circle">
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default AllFriends;