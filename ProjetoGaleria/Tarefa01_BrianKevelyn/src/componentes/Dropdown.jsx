import { useState } from 'react';
import './Dropdown.css'

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav>
      <ul>
        <li className="dropdown">
          <button onClick={toggleDropdown}>Home</button>
          {isOpen && (
            <ul className="dropdown-menu">
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Equipe</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
