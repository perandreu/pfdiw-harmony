import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ChatButton from './ChatButton'
import '../assets/customScrollbar.css'

import { exampleDirectMessages } from '../exampleResources/examples';

const renderedChats = [];

exampleDirectMessages.forEach((item, index) => {
    renderedChats.push(
        <ChatButton index={index} key={item.id} img={item.img} name={item.name} type={item.type} members={item.members} />
    )
})

const searchBoxStyle = {
    width: '210px',
    height: '40px'
}
const chatsBoxStyle = {
    width: '210px',
    maxHeight: '59.3vh'
}

const inputStyle = {
    height: '35px'
}
const inputBoxStyle = {
    width: '85%'
}

function DirectMessages() {
    const [conversations, setConversations] = useState(renderedChats);
    const [search, setSearch] = useState('');
    
    const searchInputChange = (event) => {
        setSearch(event.target.value.toLowerCase());
        conversations.splice(0);
        setConversations(conversations);
        exampleDirectMessages.map((chat, index) => {
            if (chat.name.toLowerCase().includes(event.target.value.toLowerCase())) conversations.push(<ChatButton index={index} key={chat.id} img={chat.img} name={chat.name} type={chat.type} members={chat.members} />);
        })
        setConversations(conversations);
    };

    return (
        <>
        <div className="list-group border my-1" style={searchBoxStyle}>
            <div className="d-flex align-content-center" style={inputStyle}>
                <label className="align-self-center mx-1" htmlFor="searchChats">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </label>
                <input onChange={searchInputChange} value={search} className="rounded bg-black align-self-center" type="text" name="searchChats" id="searchChats" placeholder="Busca una conversación" style={inputBoxStyle} />
            </div>
        </div>
            <div className='overflow-y-auto' style={chatsBoxStyle}>
                {conversations.length > 0 ? ( conversations ) : ( <p>No hay resultados para la búsqueda.</p> )}
            </div>
        </>
    )

}

export default DirectMessages;