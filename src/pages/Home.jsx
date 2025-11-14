import { VideoEmbed, Focus } from '../components/Elements.jsx';
import Releases from '../sections/Releases.jsx';
import Blog from '../sections/Blog.jsx';

function Header(props) {
  return (
    <header>
      <h1>28/11/2025</h1>
      <a href="https://legno.bigcartel.com/product/ciliegia-suicidio-elnslsi"
         target="_blank"
         rel="noopener noreferrer">
        <button>
          preorder
        </button>
      </a>
    </header>
  );
}

export default function Home() {
  return (
    <section id="home">
      <Header />
      <Focus>
        <VideoEmbed src="https://www.youtube.com/embed/DXc5sVovkzM"
                    title="" />
      </Focus>
      <Releases />
      <Blog />
    </section>
  );
}
