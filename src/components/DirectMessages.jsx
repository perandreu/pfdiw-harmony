import ChatButton from './ChatButton'

import {exampleDirectMessages} from '../exampleResources/examples';

const renderedChats = [];

exampleDirectMessages.forEach((item, index) => {
    renderedChats.push(
        <ChatButton index={index} key={item.id} img={item.img} name={item.name} type={item.type} members={item.members} />
    )
})

function DirectMessages() {

    return (
        <>
            <div className='overflow-y-auto'>
                {renderedChats}
            </div>
        </>
    )

}

export default DirectMessages;