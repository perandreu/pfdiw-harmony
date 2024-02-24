import OptionsBar from "../../components/OptionsBar";
import MessageInput from "../../components/MessageInput";
import ContentMessage from "../../components/ContentMessage";
import { useState, useEffect } from "react";

import { exampleChats } from '../../exampleResources/examples';

const messagesBoxStyle = {
    height: '72vh',
    width: '80vw'
}
const inputBoxStyle = {
    width: '80vw'
}

function UserMessageView({ id }) {
    const messageList = [];
    const replies = [];
    let count = 0;
    const [message, setMessage] = useState('');
    const messageChange = (event) => {
        setMessage(event.target.value);
    };
    const pressButton = (event) => {
        count++;
        if (event.target.value == "") return;
        if (event.code == "Enter") {

            messageList[0].replies.push({ "id":event.target.value + count, "key":event.target.value + count, "date":"Ahora", "name":"Yo", "message":message });
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
            <OptionsBar type="user" />
            <div className="ms-2 col-11 d-flex flex-column justify-content-start" style={messagesBoxStyle}>
                <div className="d-flex align-content-center mb-2">
                    <img className="rounded-circle img-thumbnail" style={imageStyle} />
                    <div className="ms-3 align-self-center fw-bold fst-italic">{messageList[0].name} - Mensajes</div>
                </div>
                <div id="repliesBox" className="overflow-auto">
                    {replies}
                </div>
            </div>
            <div className="mx-3" style={inputBoxStyle}>
                <label htmlFor="inputMessage" className="form-label mt-2"></label>
                <input value={message} onChange={messageChange} onKeyDown={pressButton} type="text" className="form-control bg-secondary-subtle" id="inputMessage" placeholder="Escribe un mensaje..." />
            </div>
        </div>
    )
}

export default UserMessageView;