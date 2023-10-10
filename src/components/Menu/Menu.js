import styles from "./Menu.madule.css";

function Menu() {
  return (
    <nav className={styles.nawigation}>
      <div className={'container ${styles.nawigationContainer}'}>
        <h2>moja firma</h2>
        <ul className={styles.mavigationList}>
          <li className={styles.navigationListItem}>
            <a href="#about-us">O nas</a>
          </li>
          <li className={styles.navigationListItem}>
            <a className={styles.navigationLink} href='#offer'>
              Oferta
            </a>
          </li>

          <li className={styles.navigationListItem}>
            <a className={styles.navigationLinkDisabled} href='/#'>
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Menu;
