import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <Link to="contatti">
        <button className='a'>
          Contatti
        </button>
      </Link>
      <Link to="supporta">
        <button className='a'>
          Supporta
        </button>
      </Link>
      <span>
        &copy; diritti riservati 2023
      </span>
    </footer>
  );
}
