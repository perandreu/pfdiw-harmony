function ChatButton({ index, key, name, img, type, members }) {

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

    return (
        <>
            <div style={pillStyle}>
                <button className="d-flex btn btn-secondary rounded rounded-5 rounded-end-0 my-1 overflow-x-hidden justify-content-start container-fluid " id={key} alt={name} title={name}>
                    <div className="d-flex">
                        <img className="rounded-circle img-thumbnail" style={imageStyle} />

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