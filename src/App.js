import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Word from './components/Word';
import Definitions from './components/Definitions';
import Error from './components/Error';

function App() {
    const [definitionData, setDefinitionData] = useState([]);

    return (
        <>
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
