import Modal from '../components/Modal';
import Stars from '../components/Stars'

function ContactLink(props) {
  return (
    <p>
      <a href={props.href}>
        <button className="star-btn">
          <span>{props.children}</span>
          <Stars />
        </button>
      </a>
    </p>
  );
}

export default function Contacts() {
  return (
    <Modal id="contatti" className="rt-brdr">
      <nav>
        <ContactLink href="mailto:eventi@ciliegia.xyz">eventi</ContactLink>
        <ContactLink href="mailto:crypto@ciliegia.xyz">x pagare in crypto</ContactLink>
        <ContactLink href="mailto:cosenoiose@ciliegia.xyz">lamentele</ContactLink>
        <ContactLink href="mailto:chiacchiere@ciliegia.xyz">chiacchiere</ContactLink>
        <ContactLink href="mailto:questapartenonimportatantoarrivanotutteallostessoindirizzo@ciliegia.xyz">altro</ContactLink>
      </nav>
    </Modal>
  );
}
