import styles from "./Footer.module.css";

function Footer() {
  return (

<footer class="footer">
      <div className={styles.sectionContainer}
         <p className={styles.Footer} >
          Nazwa firmy - wszelkie prawa zastreżone,2019</p>
        <ul>
          <li>
            <a href="offer"><i class="fa-brands fa-instagram"></i></a>
          </li>
          <li>
            <a href="about-us"><i class="fa-brands fa-square-facebook"></i></a>
          </li>
        </ul>
      </div>
    </footer>
  )}
export default Footer;