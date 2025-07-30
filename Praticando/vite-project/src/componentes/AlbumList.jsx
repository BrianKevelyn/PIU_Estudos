import React, { useState, useEffect } from 'react';

export default function AlbumList() {
  const [userId, setUserId] = useState('');         
  const [albums, setAlbums] = useState([]);        
  const [filteredAlbums, setFilteredAlbums] = useState([]); 
  const [reloadCount, setReloadCount] = useState(0);    

  // busca os álbuns da API sempre que reloadCount mudar
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        setAlbums(data); 
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsuarios();
  }, [reloadCount]);

  // quando o userId mudar ele chama a função dnv
  useEffect(() => {
    const id = Number(userId);

    if (id >= 1 && id <= 10) {
      const filtrados = albums.filter(album => album.userId === id);
      setFilteredAlbums(filtrados);
    } else {
      setFilteredAlbums([]);
    }
  }, [userId, albums]); // roda sempre que userId ou albums mudar

  const handleReload = () => {
    setReloadCount(prev => prev + 1);
  };

  return (
    <div>
      <h1>Álbuns</h1>

      <input type="number" value={userId} onChange={e => setUserId(e.target.value)} placeholder="Digite um número de 1 a 10"/>

      <button onClick={handleReload} style={{ marginLeft: '10px' }}>Atualizar álbuns</button>

      <ul>
        {filteredAlbums.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}
