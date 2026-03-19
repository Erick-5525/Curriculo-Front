"use client";

import { useEffect } from "react";
import Header from "@/components/Header/Header";
import Section from "@/components/Section/Section";
import ProjectsGrid from "@/components/ProjectsGrid/ProjectsGrid";
import SkillsGrid from "@/components/SkillsGrid/SkillsGrid";
import Contact from "@/components/Contact/Contact";
import About from "@/components/About/About";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Header />

      <main>
        <Section id="sobre" title="Sobre Mim" variant="alt">
          <About />
        </Section>

        <Section id="projetos" title="Projetos" variant="alt">
          <ProjectsGrid />
        </Section>

        <Section id="habilidades" title="Habilidades" variant="alt">
          <SkillsGrid />
        </Section>

        <Section id="contato" title="Contato" variant="alt">
          <Contact />
        </Section>
      </main>
    </>
  );
}
