import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav id="navbar">
      <Link to="/">
        <button>
          Home
        </button>
      </Link>
      <Link to="musica">
        <button>
          Musica
        </button>
      </Link>
      <Link to="galleria">
        <button>
          Galleria
        </button>
      </Link>
      <Link to="eventi">
        <button>
          Eventi
        </button>
      </Link>
      <Link to="store">
        <button>
          Negozio
        </button>
      </Link>
    </nav>
  );
}
