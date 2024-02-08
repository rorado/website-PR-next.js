import styles from "./loading.module.css";
export default function Loading() {
  return (
    <div class={styles.wrapper}>
      <div class={styles.circle}></div>
      <div class={styles.circle}></div>
      <div class={styles.circle}></div>
      <div class={styles.shadow}></div>
      <div class={styles.shadow}></div>
      <div class={styles.shadow}></div>
      <span>Loading</span>
    </div>
  );
}
