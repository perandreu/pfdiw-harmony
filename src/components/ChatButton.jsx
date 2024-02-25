import { useNavigate } from "react-router-dom";

function ChatButton({ id, index, key, name, img, type, members }) {
    const navigate = useNavigate();

    const imageStyle = {
        backgroundImage: `url("${img}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: '',

        minWidth: '50px',
        width: '50px',
        height: '50px'
    }

    const pillStyle = {
        right:'0px'
    }

    const membersCount = (type == "group") ? <div className="fst-italic">{members} members</div> : "";

    const chatHandeler = () => {
        navigate("/me/chat/"+id);
    }

    return (
        <>
            <div style={pillStyle} onClick={chatHandeler}>
                <button className="d-flex btn btn-secondary rounded rounded-5 rounded-end-0 my-1 overflow-x-hidden justify-content-start container-fluid " id={key} alt={name} title={name}>
                    <div className="d-flex">
                        <div className="rounded-circle img-thumbnail" style={imageStyle} alt="Imagen de Perfil" />

                        <div className="ms-2 d-flex flex-column justify-content-center text-start text-nowrap">
                            <div>{name}</div>
                            {membersCount}
                        </div>

                    </div>
                </button>
            </div>
        </>
    )
}

export default ChatButton;