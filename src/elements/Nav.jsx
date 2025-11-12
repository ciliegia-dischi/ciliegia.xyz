import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSpotify, faYoutube, faBandcamp } from '@fortawesome/free-brands-svg-icons';

function Icons() {
  return (
    <div className="icons">
      <a href="https://open.spotify.com/artist/4SEMUz1c0Z8kEc9E9NbnS3?si=Vu3iYL6pTYmOdLNbLGXXJQ"
         target="_blank"
         rel="noopener noreferrer">
        <FontAwesomeIcon icon={faSpotify} />
      </a>
      <a href="https://youtube.com/@ciliegiasuicidio"
         target="_blank"
         rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="https://ciliegia.bandcamp.com"
         target="_blank"
         rel="noopener noreferrer">
        <FontAwesomeIcon icon={faBandcamp} />
      </a>
      <a href="mailto:scrivi@ciliegia.xyz">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}

export default function Nav() {
  return (
    <nav className="main">
      <p>ciliegia dischi</p>
      <p className="separator">&bull;</p>
      <Icons />
    </nav>
  );
}
