import React, { useState } from 'react';
import './Card.css'

function AparecerImagem() {
    const [imagem, setImagem] = useState('./oruan.jpg');
    const [nome, setNome] = useState('Mauro');

    const trocarImagem = () => {
        setImagem(imagem === './oruan.jpg'
            ? './maurooruan.jpg'
            : './oruan.jpg');

        setNome(nome === 'Mauro'
            ? 'Oruan'
            : 'Mauro');
    };

    return (
        <div className="card">
            <figure className="card-figure">
                <img src={imagem} alt={nome} className="card-image" />
                <figcaption className="card-caption">{nome}</figcaption>
            </figure>
            <button onClick={trocarImagem} className="card-button">Trocar Imagem</button>
        </div>
    );
}

export default AparecerImagem;
