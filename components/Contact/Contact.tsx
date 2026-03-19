import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <p className={styles.subtitle}>
        Entre em contato comigo pelos canais abaixo
      </p>

      <div className={styles.item}>
        <span className={styles.label}>GitHub</span>
        <a
          href="https://github.com/Erick-5525"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          https://github.com/Erick-5525
        </a>
      </div>

      <div className={styles.item}>
        <span className={styles.label}>Email</span>
        <a
          href="mailto:erickfmarcolino04@hotmail.com"
          className={styles.link}
        >
          erickfmarcolino04@hotmail.com
        </a>
      </div>
    </div>
  );
}
