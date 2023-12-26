import React from 'react';
import { showModal } from './Modal.jsx';

export default function Footer() {
  return (
    <footer>
      <button className='a' onClick={function() {showModal('#contatti')}}>
        Contatti
      </button>
      <button className='a' onClick={function() {showModal('#supporta')}}>
        Supporta
      </button>
      <span>
        &copy; diritti riservati 2023
      </span>
    </footer>
  );
}
