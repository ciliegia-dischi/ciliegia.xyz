import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons';

function Artist(props) {
  return (
    <div className="image-container">
      <img src={props.img} alt="" />
      <div className="overlay">
        <h3>{props.children}</h3>
      </div>
    </div>
  );
}

export default function Artists() {
  return (
    <div className="artists">
      <div className="header-container">
        <div className="icon-container">
          <FontAwesomeIcon icon={faMicrophoneLines} className="nav-icon" />
        </div>
        <h1>Artisti</h1>
      </div>
      <div className="artists-container">
        <Artist img="./img/pfp.jpg">
          ciliegia suicidio
        </Artist>
        <Artist img="./img/pfp.jpg">
          T-
        </Artist>
        <Artist img="./img/pfp.jpg">
          Y
        </Artist>
        <Artist img="./img/pfp.jpg">
          Z
        </Artist>
        <Artist img="./img/pfp.jpg">
          asdfghjkl
        </Artist>
        <Artist img="./img/pfp.jpg">
          zzzz
        </Artist>
      </div>
    </div>
  );
}
