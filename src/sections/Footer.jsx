import { Link } from 'react-router-dom';
import { showModal } from './components/Modal.jsx';

export default function Footer() {
  return (
    <footer>
      <Link to="contatti">
        Contatti
      </Link>
      <button className='a' onClick={function() {showModal('#supporta')}}>
        Supporta
      </button>
      <span>
        &copy; diritti riservati 2023
      </span>
    </footer>
  );
}
