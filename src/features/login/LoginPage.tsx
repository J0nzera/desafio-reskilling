import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Login.module.css";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function realizarLogin() {
    const usuario = {
      nome: "Usuário Teste",
      email,
      endereco: {
        rua: "Rua Exemplo",
        numero: "123",
        bairro: "Centro",
        cidade: "São Paulo",
      },
    };

    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    router.push("/perfil");
  }

  return (
    <main className={styles.login}>
      <form
        className={styles.login__formulario}
        onSubmit={(event) => {
          event.preventDefault();
          realizarLogin();
        }}
      >
        <h1 className={styles.login__titulo}>Entrar</h1>

        <input
          type="email"
          placeholder="Email"
          className={styles.login__input}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          className={styles.login__input}
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          required
        />

        <button className={styles.login__botaoEntrar} type="submit">
          Entrar
        </button>
      </form>
    </main>
  );
}
