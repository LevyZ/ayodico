import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../../Sass/components/_header.scss';

function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <header role="banner" className={scroll ? "banner-scroll" : "banner"}>
      <nav role="navigation">
        <ul>
          {/*<li>*/}
          {/*  <Link to="/configurator" title="Configurator">Demo</Link>*/}
          {/*</li>*/}

          {/*<li>*/}
          {/*  <Link to="/products" title="Produits">Produits</Link>*/}
          {/*</li>*/}

          <li>
            <Link title="XX" to="/">Logo</Link>
          </li>

          <li>
            <Link to="/" title="connexion">Connexion</Link>
          </li>

          {/*<li>*/}
          {/*  <Link to="/contact" title="Contact">Contact</Link>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
