import { Album } from '../components/Elements.jsx';

export default function Releases() {
  return (
    <div className="visual-items">
      <Album
        img="/img/artwork/elnslsi-cover.jpg"
        title="è la nostra storia la scriviamo insieme"
        separator="null"
        vinile="https://legno.bigcartel.com/product/ciliegia-suicidio-elnslsi">
        {/*
        spotify=""
        youtube=""
        video=""
        bandcamp=""
        cassetta=""
        cd="">
        */}
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
