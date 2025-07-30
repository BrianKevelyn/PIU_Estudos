import { useState } from 'react';

export default function LoginForm() {
  const [formData, setFormData] = useState({ login: '', senha: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', formData.login);
    console.log('Senha:', formData.senha);

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="login"
        placeholder="Login"
        value={formData.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={formData.senha}
        onChange={handleChange}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
