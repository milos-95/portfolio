import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Milos</h1>
        <p className={styles.description}>
          A front-end developer with 1 year of experience using React and
          NodeJS. <br className={styles.break}></br> With a keen eye for detail
          and a drive for innovation, I specialize in creating dynamic web
          solutions that blend creativity with cutting-edge technology.
        </p>
        <a href="mailto:myemail@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
