import { Link } from 'react-router-dom';
import Modal, {hideModal} from '../components/Modal.jsx';

export default function Support() {
  function closeWindow() {
    hideModal('#supporta');
  }

  return (
    <Modal id="supporta">
      <p>
        Grazie, ci stai già supportando abbastanza ascoltandoci. &lt;3
      </p>
      <p>
        Se vuoi aiutarci però puoi{" "}
        <Link to="store" onClick={closeWindow}>comprare
        il nostro disco</Link>, oppure{" "}
        <a href="mailto:eventi@ciliegia.xyz">invitarci a
        suonare</a>.
      </p>
    </Modal>
  );
}
