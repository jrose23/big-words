function Definition({ speech, text }) {
    return (
        <div className="definition definition-fade-in">
            <p className="badge badge-dark">{speech}</p>
            <p className="definition-text">{text}</p>
        </div>
    );
}

export default Definition;
