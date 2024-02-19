function ServerButton( {img, name, id} ) {
    
    const letterStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.65)', 
        width: '25px',
        height: '25px',
        color: 'white'
    }

    const buttonStyle = {
        minWidth:'60px',
        minHeight:'60px',
        width: '60px',
        height: '60px'
    }
    const imgStyle = {
        backgroundImage: `url("${img}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minWidth:'55px',
        minHeight:'55px',
        width: '55px',
        height: '55px'
    }

    //const isAddButton = (index == "none") ? '' : <div className="rounded-circle" style={letterStyle}> {name[0]} </div> ;

    return (
        <>
            <button className="btn btn-dark rounded-5 rounded-top-0 mx-1 d-flex justify-content-center" style={buttonStyle} id={id} alt={name} title={name}>
                <div className="img-thumbnail rounded-circle d-flex align-items-center justify-content-center" style={imgStyle}>
                    <div className="rounded-circle" style={letterStyle}> {name[0]} </div>
                </div>
            </button>
        </>
    )
}

export default ServerButton;