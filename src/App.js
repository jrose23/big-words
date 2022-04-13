import './App.css';
import { useState, useEffect } from 'react';
import defaultWords from './defaultWords';
import Alert from './components/Alert';
import Header from './components/Header';
import Word from './components/Word';
import Definitions from './components/Definitions';
import Error from './components/Error';

function App() {
    const [definitionData, setDefinitionData] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [alertText, setAlertText] = useState('');

    return (
        <>
            {showAlert && <Alert text={alertText} showAlert={showAlert} />}
            <Header setDefinitionData={setDefinitionData} />
            <Word text={definitionData[0] ? definitionData[0].word : 'Word Not Found'} />
            {definitionData[0] ? (
                <Definitions data={definitionData} />
            ) : (
                <Error message={definitionData.message} />
            )}
        </>
    );
}

export default App;
