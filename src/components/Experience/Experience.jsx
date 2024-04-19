import styles from "./Experience.module.css";
import technologies from "../../data/technologies.json";
import { getImageUrl } from "../../utils";

function Experience() {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>
        Technologies I have experience working with
      </h2>
      <div className={styles.content}>
        <div className={styles.technologies}>
          {technologies.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
