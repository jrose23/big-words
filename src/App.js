import './App.css';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import defaultWords from './defaultWords';
import Header from './components/Header';
import Word from './components/Word';
import Definitions from './components/Definitions';

function App() {
    const [word, setWord] = useState(defaultWords());
    const [definitionData, setDefinitionData] = useState([]);

    function getWord(formText) {
        setWord(formText);
    }

    useEffect(() => {
        async function getWordData() {
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const data = await res.json();

            if (res.status >= 400) {
                toast('test');
                setWord('error');
            } else {
                const definitionArray = [];
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
        }

        getWordData();
    }, [word]);

    return (
        <>
            <ToastContainer />
            <Header handleSubmit={getWord} />
            <Word text={word} />
            <Definitions data={definitionData} />
        </>
    );
}

export default App;
