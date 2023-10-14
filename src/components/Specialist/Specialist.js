import styles from "./Specialist.module.css";

function Specialist(props) {
  const { name, photoURL, photoALT, department, description } = props;

  return (
    <div className={styles.specialist}>
      <img className={styles.specialistPhoto} src={photoURL} alt={photoALT} />
      <div className={styles.specialistDescription}>
        <p className={styles.specialistName}>
          {name} [ {department} ]
        </p>

        <p className={styles.specialistText}>{description}</p>
      </div>
    </div>
  );
}

export default Specialist;
