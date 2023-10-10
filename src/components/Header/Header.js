import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.sectionHome}>
      <div className={styles.overlay}>
        <div className={"container ${styles.sectionHome.Container}"}>
          <div className={styles.homeContainer}>
            <h1 className={styles.sectionHomeHeader}>
              Nasza firma oferuje najwyższej jakości produkty.
            </h1>

            <p className={styles.sectionHomeInfo}>
              Nie wierz nam na słowo - sprawdż
            </p>
            <a className={styles.sectionHomeLink} href="#offer">
              Oferta
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
