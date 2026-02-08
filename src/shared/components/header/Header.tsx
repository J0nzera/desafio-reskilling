import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          🍕 Pizzaria
        </Link>

        <nav className={styles.actions}>
          <button className={styles.button}>Entrar</button>
        </nav>
      </div>
    </header>
  );
}
