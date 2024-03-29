


function ContentMessage({ id, date, name, message }) {
    return(
        <div className="mx-2 my-1 py-1 px-3 border rounded">
            <div className="fw-bold text-info">{name}</div>
            <div className="ms-2 text-break">{message}</div>
            <div className="ms-1 fst-italic fs-6 ">Enviado {date}</div>
        </div>
    )
}

export default ContentMessage