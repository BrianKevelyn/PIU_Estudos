import { useState, useEffect } from 'react';
import axios from 'axios';

// Componente principal do gerenciador de tarefas
export default function Tarefas() {
  // Estado para armazenar o texto da nova tarefa
  const [titulo, setTitulo] = useState('');
  // Estado para armazenar a lista de tarefas
  const [tarefas, setTarefas] = useState([]);

  // useEffect executa uma vez quando o componente monta para buscar tarefas da API
  useEffect(() => {
    axios.get('http://localhost:8000/tarefas') // Faz requisição GET para API
      .then(res => setTarefas(res.data))       // Salva a resposta (lista de tarefas) no estado
      .catch(err => console.error('Erro ao buscar tarefas:', err)); // Em caso de erro, mostra no console
  }, []); // Array vazio garante que execute só na montagem

  // Função para cadastrar nova tarefa
  const handleCadastrar = () => {
    if (!titulo.trim()) return; // Se o campo estiver vazio, não faz nada

    const novaTarefa = { titulo, concluida: false }; // Cria objeto nova tarefa

    axios.post('http://localhost:8000/tarefas', novaTarefa) // Envia para API via POST
      .then(res => {
        // Atualiza a lista local com a tarefa recebida da API
        setTarefas(prev => [...prev, res.data.tarefa]);
        setTitulo(''); // Limpa o campo de input
      })
      .catch(err => console.error('Erro ao cadastrar tarefa:', err)); // Mostra erro se falhar
  };

  // Função para alternar o status 'concluida' da tarefa clicada
  const alternarConclusao = (index) => {
    const atualizadas = [...tarefas];             // Copia o array para evitar mutação direta
    atualizadas[index].concluida = !atualizadas[index].concluida; // Inverte o valor booleano
    setTarefas(atualizadas);                       // Atualiza o estado com a nova lista
  };

  return (
    <div>
      <h2>Gerenciador de Tarefas</h2>

      {/* Input para digitar o título da tarefa */}
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={titulo}                   // Valor controlado pelo estado 'titulo'
        onChange={e => setTitulo(e.target.value)} // Atualiza o estado conforme o usuário digita
      />
      
      {/* Botão para cadastrar a tarefa */}
      <button onClick={handleCadastrar}>Cadastrar</button>

      {/* Lista de tarefas */}
      <ul>
        {tarefas.map((tarefa, i) => (
          <li
            key={i}
            // Estilo para mostrar riscado e cor cinza se concluída
            style={{
              textDecoration: tarefa.concluida ? 'line-through' : 'none',
              color: tarefa.concluida ? 'gray' : 'black',
            }}
          >
            {tarefa.titulo}{' '}
            {/* Botão para marcar ou desmarcar a tarefa */}
            <button onClick={() => alternarConclusao(i)}>
              {tarefa.concluida ? 'Desmarcar' : 'Concluir'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
