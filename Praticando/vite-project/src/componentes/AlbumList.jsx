import React, { useState, useEffect } from 'react';

export default function AlbumList() {
  const [userId, setUserId] = useState('');
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  // estado que serve para ajudar a recarregar os álbuns da API
  const [reloadCount, setReloadCount] = useState(0); // contador de quantas vezes de recarregamento

  useEffect(() => {
    // faz a requisição (fetch) para buscar os álbuns
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json()) 
      .then(data => {
        setAlbums(data); 
        console.log('Álbuns atualizados da API'); // só pra testar se tá indo ai aparece lá no console
      });
  }, [reloadCount]); // quando mudar faz outra chamada

  const handleSearch = () => {
    const id = Number(userId); 

    if (id >= 1 && id <= 10) {
      const filtrados = albums.filter(album => album.userId === id);
      setFilteredAlbums(filtrados); // atualiza a lista filtrada
    } else {
      alert('Digite um número entre 1 e 10');
      setFilteredAlbums([]); 
    }
  };

  const handleReload = () => {
    // incrementa o contador que isso faz com que o useEffect rode de novo
    setReloadCount(prev => prev + 1);
  };

  return (
    <div>
      <h1>Álbuns</h1>

      <input  type="number" value={userId}  onChange={e => setUserId(e.target.value)}  placeholder="Digite um número de 1 a 10"/>
      <button onClick={handleSearch}>Buscar</button>

      <button onClick={handleReload} style={{ marginLeft: '10px' }}>
        Atualizar álbuns
      </button>
  
      <ul>
        {filteredAlbums.map(album => (
          <li key={album.id}>{album.title}</li> 
        ))}
      </ul>
    </div>
  );
}
