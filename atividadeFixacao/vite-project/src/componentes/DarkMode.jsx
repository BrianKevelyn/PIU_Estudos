import { useState } from 'react'
import { useEffect } from 'react';

export default function DarkMode(){

    const [tema, setTema] = useState('')

    const alternarTema = () => {
        if (tema === "dark") {
    setTema('white')
    } else {
    setTema('dark')
    }
    }

    useEffect(() => {
    if (tema === "dark") {
    document.body.style.backgroundColor = "black"
    } else {
    document.body.style.backgroundColor = "white"
    }
    }, [tema]);

    return(
        <div>
            <button onClick={alternarTema}>
                Alternar Tema
            </button>
        </div>
    )
}