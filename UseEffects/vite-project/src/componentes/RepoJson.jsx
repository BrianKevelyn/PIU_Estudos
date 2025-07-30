import { useState, useEffect } from 'react';
import './RepoJson.css'

export default function RepoJson() {
  const [dados, setDados] = useState([]);
  const [carregado, setCarregado] = useState("");

  useEffect(() => {
    if (carregado) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setDados(data))
        .catch(err => console.error("Erro:", err));
    }
  }, [carregado]);

  return (
    <div>
      <h1>Tabelas - questão 1</h1>

      <div className='tableName'>
        <h2>Nomes</h2>
        <button onClick={() => setCarregado("name")}>Carregar Nomes</button>
        {carregado === "name" && (
          <table border="1">
            <thead>
              <tr><th>Nome</th></tr>
            </thead>
            <tbody>
              {dados.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className='tableUsername'>
        <h2>Usernames</h2>
        <button onClick={() => setCarregado("username")}>Carregar Usernames</button>
        {carregado === "username" && (
          <table border="1">
            <thead>
              <tr><th>Username</th></tr>
            </thead>
            <tbody>
              {dados.map(user => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className='tableCity'>
        <h2>Cidades</h2>
        <button onClick={() => setCarregado("city")}>Carregar Cidades</button>
        {carregado === "city" && (
          <table border="1">
            <thead>
              <tr><th>Cidade</th></tr>
            </thead>
            <tbody>
              {dados.map(user => (
                <tr key={user.id}>
                  <td>{user.address.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
