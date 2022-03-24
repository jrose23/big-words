function Badge({ color, text }) {
    return <p className={`badge badge-${color}`}>{text}</p>;
}

export default Badge;
