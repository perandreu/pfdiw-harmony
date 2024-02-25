import ServerButton from './ServerButton';

import {exampleServerList, plusImage} from '../exampleResources/examples';

function ServerList() {

    return (
        <>
            <div className='d-flex container-fluid '>
                {
                    exampleServerList.map((obj) => <ServerButton key={obj.id} {...obj} />)
                }
                <ServerButton index={"none"} key={'addServer'} img={plusImage.img} name={'Add New Server'} />
            </div>
        </>
    )
}


export default ServerList;