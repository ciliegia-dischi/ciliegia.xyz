import { VideoEmbed, Focus, Album } from '../components/Elements.jsx';

function Videos() {
  return (
    <div className="visual-items">
      <Focus>
        <VideoEmbed src="https://www.youtube.com/embed/ETfp9Eg7eh4"
                    title="" />
      </Focus>
      <Focus>
        <VideoEmbed src="https://www.youtube.com/embed/DXc5sVovkzM"
                    title="" />
      </Focus>
    </div>
  );
}

function Albums() {
  return (
    <div className="visual-items">
      <Album
        img="/img/artwork/elnslsi-cover.jpg"
        title="è la nostra storia la scriviamo insieme"
        separator="null"
        spotify="https://open.spotify.com/album/3MoQJNSDmezhLg7oloH3pV"
        youtube="https://www.youtube.com/watch?v=hJoQxk70avU&list=OLAK5uy_mN6vfCQ5eCe82RPKpwySgRUcv6CClelQ0"
        bandcamp=""
        video="https://www.youtube.com/watch?v=DXc5sVovkzM&list=PL01W7MPmrPz24pEBCmK5CsSMCRTJFm22k&pp=gAQB"
        vinile="https://legno.bigcartel.com/product/ciliegia-suicidio-elnslsi"
        cassetta=""
        cd="">
        {/*bandcamp="https://ciliegia.bandcamp.com/album/la-nostra-storia-la-scriviamo-insieme"*/}
      </Album>
      <Album
        img="/img/artwork/imostri-cover.jpg"
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

export default function Releases() {
  return (
    <div className="visual-items">
      <Videos />
      <Albums />
    </div>
  );
}
