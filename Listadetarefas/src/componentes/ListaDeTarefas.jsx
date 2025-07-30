import './ListaDeTarefas.css'
import { useState } from 'react'

export default function ListaDeTarefas() {
    const [tarefa, setTarefa] = useState('')
    const [lista, setLista] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (tarefa.trim() === '') return

        const novaTarefa = { texto: tarefa, status: 'pendente' }
        setLista([...lista, novaTarefa])
        setTarefa('')
    }

    const atualizarStatus = (index, novoStatus) => {
        const novaLista = [...lista]
        novaLista[index].status = novoStatus
        setLista(novaLista)
    }

    const moverTarefa = (index, deslocamento) => {
    const novaLista = [...lista]
    const novoIndex = index + deslocamento

    if (novoIndex < 0 || novoIndex >= lista.length) return

    const temp = novaLista[index]
    novaLista[index] = novaLista[novoIndex]
    novaLista[novoIndex] = temp

    setLista(novaLista)
    }


    return (
        <div>
            <h2>Lista de Tarefas React</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="tarefa"
                    value={tarefa}
                    onChange={(e) => setTarefa(e.target.value)}
                    placeholder="Digite uma tarefa"
                />
                <input type="submit" value="Adicionar" />
            </form>

            <ul>
                {lista.map((item, index) => (
                    <div key={index} className='card'>
                        <label style={{
                            textDecoration: item.status === 'realizada' ? 'line-through' : 'none',
                            color: item.status === 'nao-realizada' ? 'black' 
                            : item.status === 'realizada' ? 'green' 
                            :'red',
                        }}>
                            {item.texto} - <strong>{item.status}</strong>
                        </label>

                        <div>
                            <button onClick={() => atualizarStatus(index, 'realizada')}>Feito</button>
                            <button onClick={() => atualizarStatus(index, 'nao-realizada')}>Não Feito</button>
                            <button onClick={() => atualizarStatus(index, 'pendente')}>Pendente</button>
                            <button onClick={() => moverTarefa(index, -1)}>↑</button>
                            <button onClick={() => moverTarefa(index, 1)}>↓</button>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}
