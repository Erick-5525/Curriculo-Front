import styles from "./SkillBadge.module.css";

type Props = {
  label: string;
};

export default function SkillBadge({ label }: Props) {
  return <span className={styles.badge}>{label}</span>;
}
