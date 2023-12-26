import React from 'react';
import { Link } from "react-router-dom";

function Star(props) {
  return (
    <div class={"star star-" + props.id}>
      <svg viewBox="0 0 784.11 815.53"><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" class="fil0"></path></g></svg>
    </div>
  );
}

function Stars() {
  var stars = [];
  for (let i = 1; i <= 6; i++) stars.push(<Star id={i} />);
  return stars;
}

function NavButton(props) {
  return (
    <button className={"star-btn " + props.className}>
      <span>{props.children}</span>
      <Stars />
    </button>
  );
}

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <NavButton className="home">
          Home
        </NavButton>
      </Link>
      <Link to="musica">
        <NavButton className="music">
          Musica
        </NavButton>
      </Link>
      <Link to="galleria">
        <NavButton className="gallery">
          Galleria
        </NavButton>
      </Link>
      <Link to="eventi">
        <NavButton className="events">
          Eventi
        </NavButton>
      </Link>
      <Link to="store">
        <NavButton className="store">
          Store
        </NavButton>
      </Link>
    </nav>
  );
}
