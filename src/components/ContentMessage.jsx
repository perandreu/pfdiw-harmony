


function ContentMessage({ id, date, name, message }) {
    return(
        <div className="ms-2 my-1 py-1 px-3 col-10 border rounded">
            <div className="fw-bold text-info">{name}</div>
            <div className="ms-2 text-break">{message}</div>
            <div className="ms-1 fst-italic fs-6 text-secondary">Enviado {date}</div>
        </div>
    )
}

export default ContentMessage