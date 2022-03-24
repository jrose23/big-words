import { nanoid } from 'nanoid';
import Definition from './Definition';

function Definitions({ data }) {
    const definitions = data.map(def => {
        return <Definition speech={def.speech} text={def.definition} key={nanoid()} />;
    });

    return <div className="definition-grid">{definitions}</div>;
}

export default Definitions;
