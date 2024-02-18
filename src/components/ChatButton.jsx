function ServerButton({ index, key, name, img, type, members }) {

    const imageStyle = {
        backgroundImage: `url("${img}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        width: '50px',
        height: '50px'
    }

    const buttonStyle = {
        width: '210px'
    }

    return (
        <>
            <div className="">
                <button className="btn rounded bg-secondary rounded-5 rounded-start-0 my-1" id={key} style={buttonStyle} alt={name} title={name}>
                    <div className="d-flex">
                    <div className="rounded-circle" style={imageStyle}></div>

                    <div className="ms-2 d-flex flex-column justify-content-start text-start">
                        <div className="">{name}</div>
                        <div className="fst-italic">{members} members</div>
                    </div>

                    </div>

                </button>
            </div>
        </>
    )
}

export default ServerButton;