import { FaIcon } from './Elements.jsx';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSpotify, faYoutube, faBandcamp } from '@fortawesome/free-brands-svg-icons';

function Icons() {
  return (
    <div className="icons">
      <FaIcon href="https://open.spotify.com/artist/4SEMUz1c0Z8kEc9E9NbnS3?si=Vu3iYL6pTYmOdLNbLGXXJQ"
            icon={faSpotify} />
      <FaIcon href="https://youtube.com/@ciliegiasuicidio"
            icon={faYoutube} />
      <FaIcon href="https://ciliegia.bandcamp.com"
            icon={faBandcamp} />
      <FaIcon href="mailto:scrivi@ciliegia.xyz"
            icon={faEnvelope} />
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <p className="home"><a href="%PUBLIC_URL%">ciliegia dischi</a></p>
      <p className="separator">&bull;</p>
      <Icons />
    </footer>
  );
}
