import { getImageUrl } from "../../utils";
import styles from "./Skills.module.css";

// icons
import { FaLocationArrow } from "react-icons/fa6";
import { LuMonitorSmartphone } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { TbApi } from "react-icons/tb";

function Skills() {
  return (
    <section className={styles.container} id="skills">
      <div className={styles.content}>
        <div className={styles.leftContainer}>
          <div className={styles.title}>
            As a front-end developer, here are the skills and expertise I
            possess:
          </div>
          <img
            src={getImageUrl("skills/skillsImage.png")}
            alt="Me sitting with a laptop"
            className={styles.skillsImage}
          />
        </div>
        <ul className={styles.skillsItems}>
          <li className={styles.skillsItem}>
            <FaLocationArrow className={styles.icons} />
            <div className={styles.skillsItemText}>
              <h3>Custom Web Development</h3>
              <p>
                Creating bespoke web applications tailored to the one&apos;s
                specific needs, ensuring a seamless user experience across
                devices
              </p>
            </div>
          </li>
          <li className={styles.skillsItem}>
            <LuMonitorSmartphone className={styles.icons} />
            <div className={styles.skillsItemText}>
              <h3>Responsive Design</h3>
              <p>
                Developing websites that can adapt fluidly to various screen
                sizes and devices, enhancing accessibility and user engagement
              </p>
            </div>
          </li>
          <li className={styles.skillsItem}>
            <CgWebsite className={styles.icons} />
            <div className={styles.skillsItemText}>
              <h3>UI Design</h3>
              <p>
                Crafting visually appealing and intuitive user interfaces with
                modern design principles, enhancing usability and brand
                perception
              </p>
            </div>
          </li>
          <li className={styles.skillsItem}>
            <BsArrowUpSquareFill className={styles.icons} />
            <div className={styles.skillsItemText}>
              <h3>Performance Optimization</h3>
              <p>
                Optimizing website performance through efficient code
                implementation, lazy loading, code splitting, and other
                techniques, ensuring fast loading times
              </p>
            </div>
          </li>
          <li className={styles.skillsItem}>
            <TbApi className={styles.icons} />
            <div className={styles.skillsItemText}>
              <h3>Third-party Integrations</h3>
              <p>
                Integrating third-party APIs and services seamlessly into React
                applications to extend functionality and improve user experience
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
