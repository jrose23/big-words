import { useState, useEffect } from 'react';
import './App.css';
import FadeIn from 'react-fade-in';
import Header from './components/Header';
import Word from './components/Word';
import Definitions from './components/Definitions';

function App() {
    const [word, setWord] = useState('bicycle');
    const [definitionData, setDefinitionData] = useState([]);

    useEffect(() => {
        async function getWordData() {
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const data = await res.json();
            const definitionArray = [];
            console.log(data.message);
            const meanings = data[0].meanings;

            meanings.forEach(meaning => {
                const speech = meaning.partOfSpeech;
                const meaningDefs = meaning.definitions;

                meaningDefs.forEach(def => {
                    def.speech = speech;

                    definitionArray.push(def);
                });
            });

            setDefinitionData(definitionArray);
        }

        getWordData();
    }, [word]);

    function getWord(formText) {
        setWord(formText);
    }

    // console.log(definitionData);

    return (
        <>
            <Header handleSubmit={getWord} />
            <Word text={word} />
            <Definitions data={definitionData} />
        </>
    );
}

export default App;
