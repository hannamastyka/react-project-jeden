import styles from "./SpecialistsList.module.css";
import Specialist from "../Specialist/Specialist";

function SpecialistsList() {
  return (
    <header className={"container"} id="about-us">
      <h2 className={styles.sectionHomeSpecialists}>Nasi specjalisci</h2>
      <div className={styles.list}>
        <Specialist
          name={"Imie Nazwisko"}
          department={"dział"}
          photoURL={"/images/weterynarz.jpeg"}
          photoALT={"Specialista pierwszy"}
          description={`Ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa
              et lacus egestas cursus a non magna. Fusce scelerisque blandit
              nunc, id malesuada ex lobortis a. Integer felis nisi, tempor
              elementum lorem in, varius pellentesque ligula. Duis efficitur
              lacinia enim, non tincidunt libero ultrices ink.`}
        />
        <Specialist
          name={"Imie Nazwisko"}
          department={"dział"}
          photoURL={"/images/kot.png"}
          photoALT={"Specialista pierwszy"}
          description={`Ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa
              et lacus egestas cursus a non magna. Fusce scelerisque blandit
              nunc, id malesuada ex lobortis a. Integer felis nisi, tempor
              elementum lorem in, varius pellentesque ligula. Duis efficitur
              lacinia enim, non tincidunt libero ultrices ink.`}
        />
      </div>
    </header>
  );
}
export default SpecialistsList;
