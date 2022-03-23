import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {
    const defaultWords = ['Hello', 'Placebo', 'Taco'];
    const [word, setWord] = useState(defaultWords[Math.floor(Math.random() * defaultWords.length)]);

    function getWord(formText) {
        setWord(formText);
    }

    return (
        <>
            <Header handleSubmit={getWord} />
            <Body text={word} />
        </>
    );
}

export default App;
