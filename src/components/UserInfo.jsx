import { faMicrophoneLines, faMicrophoneLinesSlash, faVolumeHigh, faVolumeXmark, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { exampleUserInfo } from "../exampleResources/examples";

const imageStyle = {
    backgroundImage: `url("${exampleUserInfo[0].img}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    minWidth: '35px',
    width: '45px',
    height: '45px'
}
const statusCircleStyle = {
    backgroundColor: `${exampleUserInfo[0].statusColor}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    marginLeft: '-12px',
    minWidth: '15px',
    width: '15px',
    height: '15px'
}


function UserInfo() {
    let isDeaf = false;
    const [isSilenced, setIsSilenced] = useState(false);
    const [silence, setSilence] = useState(<FontAwesomeIcon icon={faMicrophoneLines} size="lg" />);
    const [deaf, setDeaf] = useState(<FontAwesomeIcon icon={faVolumeHigh} size="lg" />);

    const muteHandler = () => {
        setIsSilenced(!isSilenced)
        let silence = isSilenced ? <FontAwesomeIcon icon={faMicrophoneLines} size="lg" /> : <FontAwesomeIcon icon={faMicrophoneLinesSlash} size="lg" />;
        setSilence(silence);
    }
    const deafHandler = () => {
        isDeaf = !isDeaf;
        let deaf = isDeaf ? <FontAwesomeIcon icon={faVolumeHigh} size="lg" /> : <FontAwesomeIcon icon={faVolumeXmark} size="lg" />;
        setDeaf(deaf);
    }

    return (
        <div className="col">
            <div className="d-flex ms-3 mt-2">
                <div className="d-flex btn btn-dark">
                    <div className="rounded-circle img-thumbnail" style={imageStyle}></div>
                    <div>
                        <div className="ms-2 align-self-center fw-bolder" title={exampleUserInfo[0].name + " (Yo)"}>{exampleUserInfo[0].name}</div>
                        <div className="d-flex" title={exampleUserInfo[0].status}>
                            <div className="me-1 align-self-center rounded-circle img-thumbnail" style={statusCircleStyle} />
                            <div className="ms-2 align-self-center fst-italic">{exampleUserInfo[0].status}</div>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <button onClick={muteHandler} className="btn btn-dark align-self-center" title="Silenciar">{silence}</button>
                    <button onClick={deafHandler} className="btn btn-dark align-self-center" title="Ensordecer">{deaf}</button>
                    <button className="btn btn-dark align-self-center" title="Ajustes de Usuario"><FontAwesomeIcon icon={faGear} size="lg" /></button>
                </div>
            </div>
        </div>
    )

}

export default UserInfo