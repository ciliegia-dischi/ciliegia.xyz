import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecordVinyl, faHouse, faMusic, faCalendar, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function NavItem(props) {
  return (
    <li className={"nav-item " + props.className}>
      <b />
      <b />
      {props.children}
    </li>
  );
}

function NavLink(props) {
  return (
    <NavItem className={props.className}>
      <Link to={props.href}>
        <FontAwesomeIcon icon={props.icon} className="nav-icon" />
        <span className="nav-text">
          {props.children}
        </span>
      </Link>
    </NavItem>
  );
}

function ExtLink(props) {
  return (
    <NavItem>
      <a target="_blank" rel="noreferrer" href={props.href}>
        <FontAwesomeIcon icon={props.icon} className="nav-icon" />
        <span className="nav-text">
          {props.children}
        </span>
      </a>
    </NavItem>
  );
}

export default function Nav() {
  return (
    <nav className="main-menu">
      <div className="title">
        <FontAwesomeIcon icon={faRecordVinyl}
                         className="logo" />
        <h1>ciliegia dischi</h1>
      </div>
      <ul>

        <NavLink to="/"
                 className="home active"
                 icon={faHouse}
        >
          Home
        </NavLink>

        <NavLink to="musica"
                 className="music"
                 icon={faMusic}
        >
          Musica
        </NavLink>

        <NavLink to="eventi"
                 className="events"
                 icon={faCalendar}
        >
          Eventi
        </NavLink>

        <ExtLink href="https://ciliegia.bigcartel.com"
                 className="store"
                 icon={faShoppingCart}
        >
          Store
        </ExtLink>

      </ul>
    </nav>
  );
}
