function ServerButton( {index,key,name,img,type,members} ) {
    
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

    return (
        <>
            <div className="rounded bg-secondary rounded-5 rounded-end-0 mx-1">
                <button className="rounded-circle btn" id={key} style={buttonStyle} alt={name} title={name}>
                    <div>
                    <div>{name}</div>
                    </div>
                    <div>{members}</div>
                </button>
            </div>
        </>
    )
}

export default ServerButton;