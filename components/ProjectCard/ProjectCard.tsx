import styles from "./ProjectCard.module.css";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  repo: string;
  demo: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  repo,
  demo,
  image,
}: Project) {
  return (
    <article className={styles.card}>
      <Image
        src={image}
        alt={`Imagem do projeto ${title}`}
        width={600}
        height={350}
        className={styles.image}
      />

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className={styles.techs}>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className={styles.links}>
          <a href={repo} target="_blank">
            Repositório
          </a>
          <a href={demo} target="_blank">
            Demo
          </a>
        </div>
      </div>
    </article>
  );
}
