import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <Image
        src="/images/profile.png"
        alt="Minha foto"
        width={180}
        height={180}
        className={styles.image}
        priority
      />

      <div className={styles.text}>
        <p>
          Desenvolvedor Front-end, com foco em
          construir aplicações completas. Aplico boas práticas de desenvolvimento em todos os projetos, 
          prezando por código organizado, seguro e escalável.
        </p>

        <p>
          No front-end, desenvolvo com{" "}
          <strong>React</strong>, <strong>Next.js</strong> e{" "}
          <strong>TypeScript</strong>, utilizando <strong>CSS Modules</strong> e{" "}
          <strong>Tailwind CSS</strong> para interfaces responsivas e acessíveis.
        </p>

        <p>
          Utilizo <strong>Git</strong> e <strong>GitHub</strong> para
          versionamento, tenho familiaridade com <strong>CI/CD</strong> ,
          metodologias ágeis como <strong>Scrum</strong> e{" "}
          <strong>Kanban</strong>.
        </p>
      </div>
    </div>
  );
}