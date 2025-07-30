import { useState } from 'react';

export default function OnChange() {
  const [formData, setFormData] = useState({
    nome: '',
    idade:'',
    cidade:''
  })

  // função para lidar com mudança no input
  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormData ({
        ...formData,
        [name]: value
    }) 
    
  };

  return (
    <div>
      <div>
        <label htmlFor="">Nome:</label>
        <input type="text" name='nome' value={formData.nome} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Idade:</label>
        <input type="text" name='idade' value={formData.idade} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Cidade:</label>
        <input type="text" name='cidade' value={formData.cidade} onChange={handleChange} />
      </div>
      <p>Você digitou: {formData.nome}</p>
      <p>Você digitou: {formData.idade}</p>
      <p>Você digitou: {formData.cidade}</p>
    </div>
  );
}
