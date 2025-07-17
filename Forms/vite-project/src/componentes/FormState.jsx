import { useState } from 'react';
import './FormState.css'

export default function FormState() {
  const [name, setName] = useState('');
  const [data, setData] = useState('');
  const [bio, setBio] = useState('');
  const [registros, setRegistros] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !data || !bio) return;

    const novoRegistro = {
      name,
      data,
      bio
    };

    setRegistros([...registros, novoRegistro]);

    setName('');
    setData('');
    setBio('');
  };

  function Resetar(e) {
    e.preventDefault();
    setRegistros([]);
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Formulário com useState</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
            />
          </label>
        </div>
        <div>
          <label>
            Data:
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              placeholder="Digite a data"
            />
          </label>
        </div>
        <div>
          <label>
            Descrição:
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Fale um pouco sobre você"
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
        <button onClick={Resetar}>Resetar</button>
      </form>

      <hr />

      <h3>Registros:</h3>
      {registros.length === 0 && <p>Nenhum registro ainda.</p>}
      {registros.map((registro, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            marginTop: '10px',
            backgroundColor: 'black'
          }}
        >
          <p><strong>Nome:</strong> {registro.name}</p>
          <p><strong>Data:</strong> {registro.data}</p>
          <p><strong>Descrição:</strong> {registro.bio}</p>
        </div>
      ))}
    </div>
  );
}
