import { useState } from 'react';

function Form({ handleSubmit }) {
    const [formText, setFormText] = useState('');

    function getFormText(e) {
        setFormText(e.target.value);
    }

    function submitFormText(e) {
        e.preventDefault();

        if (formText.match(/^[A-Za-z]+$/)) {
            handleSubmit(formText);
            setFormText('');
        } else {
            console.log('Enter a word!');
        }
    }

    return (
        <form className="word-form" onSubmit={e => submitFormText(e)}>
            <input className="word-form-text" onChange={getFormText} value={formText} name="word-form-text" type="text" placeholder="Enter a word..." />
            <button className="word-form-btn">Define</button>
        </form>
    );
}

export default Form;
