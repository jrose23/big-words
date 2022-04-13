import Badge from './Badge';

function Word({ text }) {
    return (
        <div className="word-container">
            <Badge
                color="light"
                text={text === 'Word Not Found' ? 'Something went wrong' : 'The definition of'}
            />
            <h1 className="word-text">{text}</h1>
        </div>
    );
}

export default Word;
