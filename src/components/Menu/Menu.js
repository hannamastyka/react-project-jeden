import styles from "./Menu.module.css";

function Menu() {
  return (
    <nav className={styles.navigation}>
      <div className={`container ${styles.navigationContainer}`}>
        <h2>moja firma</h2>
        <ul className={styles.navigationList}>
          <li className={styles.navigationListItem}>
            <a className={styles.navigationLink} href="#about-us">
              O nas
            </a>
          </li>
          <li className={styles.navigationListItem}>
            <a className={styles.navigationLink} href="#offer">
              Oferta
            </a>
          </li>

          <li className={styles.navigationListItem}>
            <div className={styles.navigationLinkDisabled}>Kontakt</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Menu;
