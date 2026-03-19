import styles from "./SkillsGrid.module.css";
import SkillBadge from "../SkillBadge/SkillBadge";
import { hardSkills, softSkills } from "@/data/skills";

export default function SkillsGrid() {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <h3>Hard Skills</h3>
        <div className={styles.grid}>
          {hardSkills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </div>

      <div className={styles.group}>
        <h3>Soft Skills</h3>
        <div className={styles.grid}>
          {softSkills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
