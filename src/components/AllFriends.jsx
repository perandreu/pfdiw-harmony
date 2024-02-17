import { Form, InputGroup } from "react-bootstrap";

function AllFriends() {
    return(
        <div className="d-flex flex-column">
            <InputGroup className="mb-3">
                <Form.Control 
                    placeholder="Buscar"
                />
                <InputGroup.Text id="userSearch"></InputGroup.Text>    
            </InputGroup>
        </div>
    )
}

export default AllFriends;