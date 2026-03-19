"use client";

import styles from "./Section.module.css";
import { useEffect, useRef } from "react";

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
  variant?: "default" | "alt";
};

export default function Section({
  id,
  title,
  children,
  variant = "default",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`${styles.section} ${
        variant === "alt" ? styles.alt : ""
      }`}
    >
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
}
