import './App.css';
import { useState, useEffect } from 'react';
import defaultWords from './defaultWords';
import Alert from './components/Alert';
import Header from './components/Header';
import Word from './components/Word';
import Definitions from './components/Definitions';

function App() {
    const [word, setWord] = useState(defaultWords());
    const [definitionData, setDefinitionData] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertText, setAlertText] = useState('');

    useEffect(() => {
        async function getWordData() {
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const data = await res.json();

            if (res.status >= 400) {
                handleAlert("Sorry! We couldn't find that word...");
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

    function handleSubmit(formText) {
        setWord(formText);
    }

    function handleAlert(text) {
        setAlertText(text);
        setShowAlert(true);
        setWord('error');

        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }

    return (
        <>
            {showAlert && <Alert text={alertText} showAlert={showAlert} />}
            <Header handleSubmit={handleSubmit} handleAlert={handleAlert} />
            <Word text={word} />
            <Definitions data={definitionData} />
        </>
    );
}

export default App;
