function EmbeddedPlayer(props) {
  return (
    <div className="player-container">
      <iframe title={props.title}
              className={"inner-content " + props.className}
              style={{borderRadius: '12px'}}
              src={"https://open.spotify.com/embed/" + props.type + "/" + props.id + "?utm_source=generator"}
              frameBorder="0" allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
      </iframe>
      <div className="text">
        {props.children}
      </div>
    </div>
  );
}

function MusicIcon(props) {
  const iconSize = "32px";
  const iconsPath = "../img/icons/";
  const iconsExt = ".svg";

  return (
    <button className={props.className}>
      <a target="_blank" rel="noreferrer"
         href={props.href}>
        <svg className={props.className + " icon"}
             width={iconSize} height={iconSize}>
          {props.fill ? 
            <circle cx="16" cy="16" r="12" fill={props.fill} />
            : ""}
          <image href={iconsPath + props.className + iconsExt}
                 width={iconSize} height={iconSize}/>
        </svg>
      </a>
    </button>
  );
}

function SpotifyIcon(props) {
  return (
    <MusicIcon className="spotify"
               href={"https://open.spotify.com/" + props.type + "/" + props.id} />
  );
}

function YoutubeIcon(props) {
  return (
    <MusicIcon className="youtube"
               href={"https://youtube.com/" + props.id} />
  );
}

function AppleMusicIcon(props) {
  return (
    <MusicIcon className="apple-music"
               fill="#dfdfdf"
               href={"https://music.apple.com/gb/" + props.type + "/" + props.id} />
  );
}

function TidalIcon(props) {
  return (
    <MusicIcon className="tidal"
               href={"https://tidal.com/browse/" + props.type + "/" + props.id} />
  );
}

function MusicIcons(props) {
  return (
    <div className="music-icons">
      {props.spotify ?
        <SpotifyIcon type={props.type} id={props.spotify} />
        : ""}
      {props.youtube ?
        <YoutubeIcon id={props.youtube} />
        : ""}
      {props.tidal ?
        <TidalIcon type={props.type} id={props.tidal} />
        : ""}
      {props.apple ?
        <AppleMusicIcon type={props.type} id={props.apple} />
        : ""}
    </div>
  );
}

function CiliegiaSuicidio() {
  return (
    <EmbeddedPlayer title="ciliegia suicidio"
                    type="artist" id="4SEMUz1c0Z8kEc9E9NbnS3">
      <h4>
        ciliegia suicidio
      </h4>
      <MusicIcons
        type="artist"
        spotify="4SEMUz1c0Z8kEc9E9NbnS3"
        youtube="@ciliegiasuicidio"
        apple="ciliegia-suicidio"
        tidal="36414365"
      />
    </EmbeddedPlayer>
  );
}

function TCova() {
  return (
    <EmbeddedPlayer title="T-"
                    type="artist" id="1ewmiU9gWEqVJOGCqGAaZz">
      <h4>
        T-
      </h4>
      <MusicIcons
        type="artist"
        spotify="1ewmiU9gWEqVJOGCqGAaZz"
        youtube=""
        apple=""
        tidal=""
      />
    </EmbeddedPlayer>
  );
}

export default function Music() {
  return (
    <section id="music">
      <div className="container">
        <div className="content">
          <CiliegiaSuicidio />
          <TCova />
        </div>
      </div>
    </section>
  );
}
