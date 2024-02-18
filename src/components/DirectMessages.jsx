import exampleDirectMessages from '../exampleResources/examples';


const renderedChats = [];

exampleDirectMessages.forEach((element, index) => {
    renderedChats.push(
        <ChatButton index={index} chatId={element.id} img={element.img} name={element.name} type={element.type} members={element.members} />
    );
});

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