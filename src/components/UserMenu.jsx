import { faPeopleGroup, faEnvelope, faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function UserMenu() {


    return (
        <>
            <table class="table table-hover">
                <div className="list-group">
                    <tr>
                        <button className="d-flex list-group-item list-group-item-action">
                            <th scope="row" className="px-2">
                                <FontAwesomeIcon icon={faPeopleGroup} />
                            </th>
                            <td scope="col">
                                Amigos
                            </td>
                        </button>
                    </tr>
                    <tr>
                        <button className="d-flex list-group-item list-group-item-action">
                            <th scope="row" className="px-2">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </th>
                            <td scope="col">
                            Mensajes en espera
                            </td>
                        </button>
                    </tr>
                    <tr>
                        <button className="d-flex list-group-item list-group-item-action">
                            <th scope="row" className="px-2">
                                <FontAwesomeIcon icon={faBoxArchive} />
                            </th>
                            <td scope="col">
                            Biblioteca
                            </td>
                        </button>
                    </tr>
                </div>
            </table >
        </>
    )
}

export default UserMenu;