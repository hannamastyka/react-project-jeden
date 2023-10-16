import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContainer}>
          <p className={styles.footerP}>
            Nazwa firmy - wszelkie prawa zastreżone,2019
          </p>
          <ul className={styles.icons}>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
