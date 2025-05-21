import { useState } from 'react';

export default function Change() {
    const [valor, setValor] = useState(0);

    function sets(diferenca) {
        setValor(valor + diferenca);
    }

    return (
        <div>
            <button onClick={() => sets(1)}> + </button>
            <h1>{valor} Cliques</h1>
            <button onClick={() => sets(-1)}> - </button>
        </div>
    );
}