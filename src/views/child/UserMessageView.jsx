import OptionsBar from "../../components/OptionsBar";
import MessageInput from "../../components/MessageInput";
import ContentMessage from "../../components/ContentMessage";
import { useState } from "react";

import { exampleChats } from '../../exampleResources/examples';

const messagesBoxStyle = {
    maxHeight: '72vh'
}

function UserMessageView({ id }) {
    const messageList = [];
    const replies = [];
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
    console.log(replies);

    return (
        <div className='row col-10 g-0'>
            <OptionsBar type="user" />
            <div className="ms-2 col-11 d-flex flex-column justify-content-start" style={messagesBoxStyle}>
                <div className="d-flex align-content-center mb-2">
                    <img className="rounded-circle img-thumbnail" style={imageStyle} />
                    <div className="ms-3 align-self-center fw-bold fst-italic">{messageList[0].name} - Mensajes</div>
                </div>
                <div className="overflow-auto">
                    {replies}
                </div>
            </div>
            <div>
                <input type="text" />
            </div>
        </div>
    )
}

export default UserMessageView;