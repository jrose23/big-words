import { nanoid } from 'nanoid';
import Definition from './Definition';

function Definitions({ data }) {
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

    const definitions = definitionArray.map(def => {
        return <Definition speech={def.speech} text={def.definition} key={nanoid()} />;
    });

    return <div className="definition-grid">{definitions}</div>;
}

export default Definitions;
