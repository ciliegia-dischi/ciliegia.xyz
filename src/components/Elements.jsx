import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faRecordVinyl, faCompactDisc, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faSpotify, faYoutube, faBandcamp } from '@fortawesome/free-brands-svg-icons';

export function Link(props) {
  if (props.href === "") {
    return (
      <a className="link" disabled>{props.children}</a> // eslint-disable-line
    );
  }

  if (props.href) {
    return (
      <a className="link"
         href={props.href}
         target={props.href.startsWith("http") ? "_blank" : "_self"}
         rel="noopener noreferrer">
        {props.children}
      </a>
    );
  }
}

export function Icon(props) {
  return (
    <Link href={props.href}>
      {props.children}
    </Link>
  );
}

export function FaIcon(props) {
  return (
    <Link href={props.href}>
      <FontAwesomeIcon icon={props.icon} />
    </Link>
  );
}

export function VideoEmbed(props) {
  return (
    <div className="video-wrapper">
      <iframe src={props.src}
              title={props.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              referrerpolicy="strict-origin-when-cross-origin" />
    </div>
  );
}

export function Focus(props) {
  return (
    <div className="focus">
      {props.children}
    </div>
  );
}

export function VisualItem(props) {
  return (
    <div className={"visual-item " + props.className +
                    (props.mobileReverse ? " mobile-reverse" : "")}>
      <div className={"visual " + (props.vid ? "vid" : "img")}>
        {props.vid ?
          <VideoEmbed src={props.vid} title={props.vidTitle} />
        :
          <img src={props.img} alt={props.title} />
        }
      </div>
      <div className="caption">
        <h3 className="title">
          {props.title}
        </h3>
        {props.children} 
      </div>
    </div>
  );
}

export function Album(props) {
  return (
    <VisualItem
      className="album"
      img={props.img}
      title={props.title}>

      <div className="icons">
        <FaIcon href={props.spotify}
              icon={faSpotify} />
        <FaIcon href={props.youtube}
              icon={faYoutube} />
        <FaIcon href={props.bandcamp}
              icon={faBandcamp} />
        <FaIcon href={props.video}
              icon={faVideo} />
      </div>
    
      {props.children}

      <div className="links">
        <Link href={props.vinile}>
          <FontAwesomeIcon icon={faRecordVinyl} />
          <span>vinile</span>
        </Link>
        <Link href={props.cassetta}>
          <img className="icon invert" src="/img/icons/cassette.svg" alt="" />
          <span>cassetta</span>
        </Link>
        <Link href={props.cd}>
          <FontAwesomeIcon icon={faCompactDisc} />
          <span>cd</span>
        </Link>
        <Link href={props.download}>
          <FontAwesomeIcon icon={faDownload} />
          <span>download</span>
        </Link>
      </div>
    </VisualItem>
  );
}
