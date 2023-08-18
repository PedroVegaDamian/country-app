import styles from "./Header.module.css";
import { IconMoon } from "./icons/IconMoon";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Where in the world?</h1>
      <button className={styles.header__darkModeButton}>
        <IconMoon />
        <span className={styles.header__darkModeLabel}>Dark Mode</span>
      </button>
    </header>
  );
};
