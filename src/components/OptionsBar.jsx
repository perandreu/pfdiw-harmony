import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

function friendsBar() {
    return(
        <div className="col-1 bg-success d-flex flex-column justify-content-center align-items-center">
            <Button className="rounded-circle" style={{width: "45px", height: "45px"}}  >
                <FontAwesomeIcon icon={faUserPlus} style={{width: "20px", height: "20px"}}/>
            </Button>
        </div>
    )
}

function OptionsBar({ type }) {
    switch(type) {
        case "friends":
            return friendsBar();
        case "chat":
            return;
        case "server":
            return;
    }
}

export default OptionsBar