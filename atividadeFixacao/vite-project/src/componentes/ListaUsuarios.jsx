import { useState, useEffect } from 'react';

export default function ListaUsuarios() {
  // 1. Estado para guardar a lista de usuários (começa vazio)
  const [usuarios, setUsuarios] = useState([]);

  // 2. Estado para guardar o texto do filtro
  const [filtro, setFiltro] = useState('');

  // 3. useEffect para buscar dados da API só quando o componente carregar
  useEffect(() => {
    // Busca os dados da API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((respostaDoServidor) => {
        // Converte a resposta para JSON
        return respostaDoServidor.json();
      })
      .then((dados) => {
        // Guarda os dados no estado
        setUsuarios(dados);
      })
      .catch((erro) => {
        console.error('Erro ao buscar usuários:', erro);
      });
  }, []); // array vazio = só executa uma vez

  // 4. Filtra os usuários para mostrar só os que o nome contém o texto do filtro
  const usuariosFiltrados = usuarios.filter((usuario) => {
    // Deixa tudo em minúsculo para comparar sem erro de maiúsculas/minúsculas
    const nomeMinusculo = usuario.name.toLowerCase();
    const filtroMinusculo = filtro.toLowerCase();

    return nomeMinusculo.includes(filtroMinusculo);
  });

  return (
    <div>
      <h2>Lista de Usuários</h2>

      {/* 5. Input para digitar o filtro */}
      <input
        type="text"
        placeholder="Filtrar por nome"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      {/* 6. Renderiza a lista dos usuários filtrados */}
      <ul>
        {usuariosFiltrados.map((usuario) => {
          return (
            <li key={usuario.id}>
              {usuario.name} ({usuario.email})
            </li>
          );
        })}
      </ul>
    </div>
  );
}
