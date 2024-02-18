import { faPeopleGroup, faEnvelope, faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function UserMenu() {

    const boxStyle = {
        width: '210px',
        height: 'auto'
    }

    const iconStyle = {
        width: '25px',
        height: '25px',
        marginLeftt: '10px'
    }

    return (
        <>
            <div className="list-group overflow-x-hidden" style={boxStyle}>
                <button className="d-flex list-group-item list-group-item-action" title="Amigos">
                    <div style={iconStyle}>
                        <FontAwesomeIcon icon={faPeopleGroup} />
                    </div>
                    <div className="ms-2">Amigos</div>
                </button>
                <button className="d-flex list-group-item list-group-item-action" title="Mensajes en espera">
                    <div style={iconStyle}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="ms-2 overflow-x-hidden text-nowrap">Mensajes en espera</div>
                </button>
                <button className="d-flex list-group-item list-group-item-action" title="Biblioteca">
                    <div style={iconStyle}>
                        <FontAwesomeIcon icon={faBoxArchive} />
                    </div>
                    <div className="ms-2">Biblioteca</div>
                </button>
            </div>
        </>
    )
}

export default UserMenu;