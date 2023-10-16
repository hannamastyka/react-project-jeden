import styles from "./Services.module.css";
import { data } from "./data";

function Services() {
  return (
    <section className={styles.sectionInfoForSpecjalist} id="offer">
      <div className="container">
        <h2 className={styles.specjialistSection}>
          Czym zajmuje się nasza firma?
        </h2>
        <div className={styles.sectionTile}>
          {data.map((offer) => (
            <div className={styles.box} key={offer.name}>
              {offer.isNew ? <div className={styles.dot}></div> : null}
              <p>{offer.name}</p>
              {offer.isNew ? <p>(nowość)</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;
