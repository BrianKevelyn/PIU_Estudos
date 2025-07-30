import React, { useState, useEffect } from 'react';
import './Albuns.css'

export default function Albuns() {
  const [userId, setUserId] = useState('');         
  const [albums, setAlbums] = useState([]);        
  const [filteredAlbums, setFilteredAlbums] = useState([]); 
  const [reloadCount, setReloadCount] = useState(0);    

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

  useEffect(() => {
    const id = Number(userId);

    if (id >= 1 && id <= 10) {
      const filtrados = albums.filter(album => album.userId === id);
      setFilteredAlbums(filtrados);
    } else {
      setFilteredAlbums([]);
    }
  }, [userId, albums]);

  const handleReload = () => {
    setReloadCount(prev => prev + 1)
    console.log("Dados atualizados!")
  };

  return (
    <div>
      <h1 className='titulo'>Lista de Álbuns</h1>
      <div className='box'>
        <input type="number" value={userId} onChange={e => setUserId(e.target.value)} placeholder='Informe um número de 1 a 10'/>
        <button onClick={handleReload}>Atualizar álbuns</button>
      </div>
    <div className="lista">
      <ul>
          {filteredAlbums.map(album => (
            <li key={album.id}><div className='box_nome'>{album.title}</div></li>
          ))}
        </ul>
    </div>
      
    </div>
  );
}
