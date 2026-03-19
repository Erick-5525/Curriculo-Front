import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjetoDetalhe({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main style={{ padding: "40px" }}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <ul>
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <p>
        <a href={project.repo} target="_blank">Repositório</a>
      </p>
      <p>
        <a href={project.demo} target="_blank">Demo</a>
      </p>
    </main>
  );
}
