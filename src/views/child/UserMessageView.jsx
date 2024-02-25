import ContentMessage from "../../components/ContentMessage";
import { useState } from "react";
import { InputGroup, Form, Button } from 'react-bootstrap';

import { exampleChats } from '../../exampleResources/examples';
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

const messagesBoxStyle = {
    height: '72vh',
    width: '80vw'
}
const inputBoxStyle = {
    width: '80vw'
}

function UserMessageView() {
    const { id } = useParams();

    const messageList = [];
    const replies = [];

    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState('');

    const pressButton = (e, btn) => {

        if (e.target.value == "") return;
        if (e.code == "Enter" || btn) {
            setCounter(counter + 1);

            messageList[0].replies.push({
                id: e.target.value + counter,
                key: e.target.value + counter,
                date: "Ahora",
                name: "Yo",
                message: message
            });

            setMessage("");
            replies.splice(0);
        }
    };

    exampleChats.filter((c) => {
        if (c.id == id) {
            messageList.push(c);
        }
    });

    const imageStyle = {
        backgroundImage: `url("${messageList[0].img}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: '',

        minWidth: '50px',
        width: '50px',
        height: '50px'
    }

    messageList[0].replies.forEach(msg => {
        replies.push(<ContentMessage id={msg.id} key={msg.id} date={msg.date} name={msg.name} message={msg.message} />);
    });


    return (
        <div className='row col-10 g-0'>
            <div className="ms-2 col-11 d-flex flex-column justify-content-start border border-secondary border-2 rounded" style={messagesBoxStyle}>
                <div className="d-flex align-content-center pb-2 pt-2 ps-2">
                    <div className="rounded-circle img-thumbnail" style={imageStyle} />
                    <div className="ms-3 align-self-center fw-bold fst-italic">{messageList[0].name} - Mensajes</div>
                </div>
                <hr />
                <div id="repliesBox" className="overflow-auto mb-2 ps-1">
                    {replies}
                </div>
            </div>
            <div className="mx-2 mt-2 border border-secondary border-2 rounded" style={inputBoxStyle}>

                <InputGroup className="p-2">
                    <Form.Control
                        placeholder={"Enviar mensaje a "+messageList[0].name}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={pressButton}
                        id="InputMessage"
                    />
                    <Button variant="outline-secondary" id="sendMessage" onClick={(e) => pressButton(e, true)}>
                        <FontAwesomeIcon icon={faShare} />
                    </Button>
                </InputGroup>
            </div>
        </div>
    )
}

export default UserMessageView;