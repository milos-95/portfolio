import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

function Contact() {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.contactInfoContainer}>
        <li className={styles.iconsContainer}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
        </li>
        <li className={styles.links}>
          <a href="mailto:janicmilos95@gmail.com">janicmilos95@gmail.com</a>
          <a href="https://www.github.com/milos-95">github.com/milos-95</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
