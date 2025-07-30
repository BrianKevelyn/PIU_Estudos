import { useState } from 'react'
import { useEffect } from 'react';

export default function UserEffect(){
    const [input, setInput] = useState('')
    const [texto, setTexto] = useState('')

    useEffect(() => {
    if (input != "") {
    setTexto("O texto mudou!")
    } else {
    setTexto("")
    }
    }, [input]);

    const handleChange = (e) => {
    setInput(e.target.value);
  };

    return(
        <div>
            <input type="text" onChange={handleChange} />
            <p>{texto}</p>
        </div>
    )
}