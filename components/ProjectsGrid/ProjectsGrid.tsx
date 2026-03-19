import { projects } from "@/data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./ProjectsGrid.module.css";

export default function ProjectsGrid() {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  );
}
