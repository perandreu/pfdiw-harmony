import ServerButton from './ServerButton';

import exampleServerList from '../exampleResources/examples';

const renderedButtons = [];

exampleServerList.forEach((element, index) => {
    renderedButtons.push(
        <ServerButton index={index} serverId={element.id} img={element.img} name={element.name} />
    );
});

function ServerList() {
    //const { serverId } = useParams();

    return (
        <>
            <div className='d-flex container-fluid'>
                {renderedButtons}
            </div>
        </>
    )
}

export default ServerList;