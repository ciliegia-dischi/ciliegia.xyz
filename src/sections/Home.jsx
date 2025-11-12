import { Link, VideoEmbed } from '../components/Utils.jsx'

function Header(props) {
  return (
    <div className="header">
      <h1>{props.children}</h1>
    </div>
  );
}

function Focus(props) {
  return (
    <div className="focus">
      {props.children}
    </div>
  );
}

function VisualItem(props) {
  return (
    <div className={"visual-item " + props.className}>
      <div className="visual">
        <img src={props.img} alt="" />
      </div>
      <div className="caption">
        <h3 className="title">
          {props.title}
        </h3>
        <text>
          {props.children} 
        </text>
      </div>
    </div>
  );
}

function Album(props) {
  return (
    <VisualItem
      className="album"
      img={props.img}
      title={props.title}>
      <div className="column">
        <Link href={props.spotify}>spoty</Link>
        <Link href={props.youtube}>yt</Link>
        <Link href={props.video}>video</Link>
        <Link href={props.bandcamp}>bandcamp</Link>
      </div>

      <div className="separator" />

      <div className="column">
        <Link href={props.vinile}>vinile</Link>
        <Link href={props.cassetta}>cassetta</Link>
        <Link href={props.cd}>cd</Link>
        <Link href={props.download}>download</Link>
      </div>
    </VisualItem>
  );
}

function Albums() {
  return (
    <div className="visual-items">
      <Album
        img="img/artwork/elnslsi-cover.jpg"
        title="è la nostra storia la scriviamo insieme"
        spotify=""
        youtube=""
        video=""
        bandcamp=""
        vinile=""
        cassetta=""
        cd="">
      </Album>
      <Album
        img="img/artwork/imostri-cover.jpg"
        title="i mostri col cazzo che si nascondono sotto alle lenzuola"
        spotify="https://open.spotify.com/album/7LCf7e9ejfOnOqAE7oFSvJ?si=CrHYCvIqStm65Wop1FyGrw"
        youtube="https://youtube.com/playlist?list=OLAK5uy_kFQdz7Y9yQbY63d2H4UFIyb-VwEF2jFL0&si=Ejjd9zcE5cJM1dU7"
        bandcamp="https://ciliegia.bandcamp.com/album/i-mostri-col-cazzo-che-si-nascondono-sotto-alle-lenzuola"
        cassetta=""
        cd="">
      </Album>
    </div>
  );
}

export default function Home() {
  return (
    <section id="home">
      <Header>ciliegia suicidio</Header>
      <Focus>
        <VideoEmbed src="https://www.youtube.com/embed/aX-JUb2mWo4?si=4TQfLQsY1dX5fhih"
                    title="" />
      </Focus>
      <Albums />
    </section>
  );
}
