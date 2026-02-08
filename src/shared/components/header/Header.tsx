import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const usuarioLogado =
    typeof window !== "undefined" &&
    Boolean(localStorage.getItem("usuarioLogado"));

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          🍕 Pizzaria
        </Link>

        <nav>
          {usuarioLogado ? (
            <Link href="/perfil" className={styles.link}>
              Perfil
            </Link>
          ) : (
            <Link href="/login" className={styles.link}>
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
