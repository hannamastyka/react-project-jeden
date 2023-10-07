function Menu() {
  return (
    <nav className="navigation">
      <div className="container">
        <h2>moja firma</h2>
        <ul className="menu">
          <li>
            <a href="#about-us">O nas</a>
          </li>
          <li>
            <a href="#offer">Oferta</a>
          </li>

          <li>
            <a className="disabled" href="/#">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Menu;
