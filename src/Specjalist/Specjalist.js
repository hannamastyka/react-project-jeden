import styles from "./Srecjalist.module.css";

function Srecjalist() {
  return (
    <header className={styles.container} id="about-us">
      style={{ bacgroundImage: "url(/images/weterynarz.png)" }}
      <h2 className="section-home-specialists">Nasi specjalisci</h2>
      <div className="specialist">
        <div className="specialist-photo"></div>

        <div className="specialist-description">
          <p className="specialist-name">Imię Nazwisko [ dział ]</p>

          <p className="specialist-text">
            Ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa
            et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc,
            id malesuada ex lobortis a. Integer felis nisi, tempor elementum
            lorem in, varius pellentesque ligula. Duis efficitur lacinia enim,
            non tincidunt libero ultrices ink.
          </p>
        </div>
      </div>
      style={{ bacgroundImage: "url(/images/kot.png)" }}
      <div className="specialist specialist-two">
        <div className="specialist-photo-two"></div>
        <div className="specialist-description">
          <p className="specialist-name">Imię Nazwisko [ dział ]</p>
          <p className="specialist-description-two">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
            massa et lacus egestas cursus a non magna. Fusce scelerisque blandit
            nunc, id malesuada ex lobortis a. Integer felis nisi, tempor
            elementum lorem in, varius pellentesque ligula. Duis efficitur
            lacinia enim, non tincidunt libero ultrices in.
          </p>
        </div>
      </div>
    </header>
  );
}
export default Specjalist;
