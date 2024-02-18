function ServerButton( {index,key,name,img} ) {
    
    const buttonStyle = {
        backgroundImage: `url("${img}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',  

        width: '50px',
        height: '50px'
    }
    const letterStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.65)', 
        width: '25px',
        height: '25px',
        color: 'white'
        
    }

    const isAddButton = (index == "none") ? '' : <div className="rounded-circle" style={letterStyle}> {name[0]} </div> ;

    return (
        <>
            <div className="rounded bg-secondary rounded-5 rounded-top-0 mx-1">
                <button className="rounded-circle btn-primary btn" id={key} style={buttonStyle} alt={name} title={name}>
                    {isAddButton}
                </button>
            </div>
        </>
    )
}

export default ServerButton;