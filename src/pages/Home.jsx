import { VideoEmbed, Focus, VisualItem } from '../components/Elements.jsx';
import Releases from '../sections/Releases.jsx';
import Blog from '../sections/Blog.jsx';

function PreorderBtn(props) {
  return (
    <a href="https://legno.bigcartel.com/product/ciliegia-suicidio-elnslsi"
        target="_blank"
        rel="noopener noreferrer">
      <button className="main">
        preorder lp
      </button>
    </a>
  );
}

function Header(props) {
  return (
    <header>
    </header>
  );
}

function Videos() {
  return (
    <div className="visual-items">
      <Focus>
        <VideoEmbed src="https://www.youtube.com/embed/ETfp9Eg7eh4"
                    title="" />
      </Focus>
      <VisualItem vid="https://www.youtube.com/embed/DXc5sVovkzM"
                  vidTitle=""
                  title=""
                  mobileReverse>
        <h1>28/11/2025</h1>
        <PreorderBtn />
      </VisualItem>
    </div>
  );
}

export default function Home() {
  return (
    <section id="home">
      <Header />
      <Videos />
      <Releases />
      <Blog />
    </section>
  );
}
