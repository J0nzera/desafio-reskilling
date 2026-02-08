import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const usuarioLogado =
    typeof window !== "undefined" &&
    Boolean(localStorage.getItem("usuarioLogado"));

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/" className={styles.header__logo}>
          🍕 Pizzaria
        </Link>

        <nav className={styles.header__acoes}>
          {usuarioLogado ? (
            <Link href="/perfil" className={styles.header__botao}>
              Perfil
            </Link>
          ) : (
            <Link href="/login" className={styles.header__botao}>
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
