import Releases from '../sections/Releases.jsx';
import Blog from '../sections/Blog.jsx';

function Header(props) {
  return (
    <header>
    </header>
  );
}

export default function Home() {
  return (
    <section id="home">
      <Header />
      <Releases />
      <Blog />
    </section>
  );
}
