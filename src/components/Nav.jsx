import { Link } from 'react-router-dom';

function NavButton(props) {
  return (
    <button className={props.className}>
      <span>{props.children}</span>
    </button>
  );
}

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <NavButton className="home">
          Home
        </NavButton>
      </Link>
      <Link to="musica">
        <NavButton className="music">
          Musica
        </NavButton>
      </Link>
      <Link to="galleria">
        <NavButton className="gallery">
          Galleria
        </NavButton>
      </Link>
      <Link to="eventi">
        <NavButton className="events">
          Eventi
        </NavButton>
      </Link>
      <a href="https://ciliegia.bigcartel.com">
        <NavButton className="store">
          Store
        </NavButton>
      </a>
    </nav>
  );
}
