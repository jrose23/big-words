function Definition({ speech, text }) {
    return (
        <div className="definition">
            <p className="badge badge-dark">{speech}</p>
            <p className="definition-text">{text}</p>
        </div>
    );
}

export default Definition;
