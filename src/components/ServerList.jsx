import ServerButton from './ServerButton';

import {exampleServerList} from '../exampleResources/examples';

const renderedButtons = [];

exampleServerList.forEach((item, index) => {
        renderedButtons.push(
            <ServerButton index={index} key={item.id} img={item.img} name={item.name}/>
        );
    });

function ServerList() {
    //const { serverId } = useParams();
    //const { exampleList } = props;

    return (
        <>
            <div className='d-flex container-fluid'>
                {renderedButtons}
            </div>
        </>
    )
}

export default ServerList;