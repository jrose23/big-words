import { useState, useEffect } from 'react';
import defaultWords from '../defaultWords';

function Form({ handleSubmit, handleAlert, setDefinitionData }) {
    const [formText, setFormText] = useState('');

    useEffect(() => {
        getWordData(defaultWords());
    }, []);

    function getFormText(e) {
        setFormText(e.target.value);
    }

    async function getWordData(word) {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await res.json();

        // console.log(data[0].word);
        setDefinitionData(data);
    }

    function submitFormText(e) {
        e.preventDefault();
        getWordData(formText);
        setFormText('');
    }

    return (
        <form className="word-form" onSubmit={e => submitFormText(e)}>
            <input
                className="word-form-text"
                onChange={getFormText}
                value={formText}
                name="word-form-text"
                type="text"
                placeholder="Enter a word..."
            />
            <button className="word-form-btn">Define</button>
        </form>
    );
}

export default Form;
