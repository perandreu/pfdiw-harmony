function ServerButton({ index, key, name, img, type, members }) {

    const imageStyle = {
        backgroundImage: `url("${img}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: '',

        minWidth: '50px',
        width: '50px',
        height: '50px'
    }

    const buttonStyle = {
        width: '210px'
    }

    const membersCount = (type == "group") ? <div className="fst-italic">{members} members</div> : "";

    return (
        <>
            <div className="">
                <button className="btn btn-secondary rounded rounded-5 rounded-end-0 my-1" id={key} style={buttonStyle} alt={name} title={name}>
                    <div className="d-flex">
                        <img className="rounded-circle img-thumbnail" style={imageStyle} />

                        <div className="ms-2 d-flex flex-column justify-content-center text-start text-nowrap overflow-x-hidden">
                            <div className="">{name}</div>
                            {membersCount}
                        </div>

                    </div>
                </button>
            </div>
        </>
    )
}

export default ServerButton;