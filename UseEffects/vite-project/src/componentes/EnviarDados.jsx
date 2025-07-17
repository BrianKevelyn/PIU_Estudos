import { useState } from "react";

export default function EnviarDados() {
  const [title, setTitle] = useState("");      
  const [id, setId] = useState("");           
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);

  const API = "http://localhost:5000/posts/";

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    setLoading(true);
    setResultado(null);

    const novoPost = {
      id: Number(id),
      title: title,
    };

    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoPost),
      });

      const data = await response.json();
      setResultado(data);
    } catch (error) {
      setResultado({ error: "Erro ao enviar dados" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Enviar Dados</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>ID: </label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {resultado && (
        <div style={{ marginTop: "20px" }}>
          <h3>Resposta da API:</h3>
          <pre>{JSON.stringify(resultado, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
