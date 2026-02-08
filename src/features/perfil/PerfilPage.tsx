import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./Perfil.module.css";

interface Usuario {
  nome: string;
  email: string;
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
  };
}

export default function PerfilPage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState<Usuario | null>(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const usuarioSalvo = localStorage.getItem("usuarioLogado");
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });

  useEffect(() => {
    if (!usuario) {
      router.push("/login");
    }
  }, [usuario, router]);

  function atualizarCampo(campo: keyof Usuario, valor: string) {
    if (!usuario) return;

    setUsuario({
      ...usuario,
      [campo]: valor,
    });
  }

  function atualizarEndereco(campo: keyof Usuario["endereco"], valor: string) {
    if (!usuario) return;

    setUsuario({
      ...usuario,
      endereco: {
        ...usuario.endereco,
        [campo]: valor,
      },
    });
  }

  function salvarPerfil() {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

    alert("Perfil salvo com sucesso!");
  }

  function sair() {
    localStorage.removeItem("usuarioLogado");
    router.push("/login");
  }

  if (!usuario) {
    return null;
  }

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1>Meu Perfil</h1>

        <label className={styles.label}>
          Nome
          <input
            className={styles.input}
            value={usuario.nome}
            onChange={(e) => atualizarCampo("nome", e.target.value)}
          />
        </label>

        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            value={usuario.email}
            onChange={(e) => atualizarCampo("email", e.target.value)}
          />
        </label>

        <h2>Endereço</h2>

        <label className={styles.label}>
          Rua
          <input
            className={styles.input}
            value={usuario.endereco.rua}
            onChange={(e) => atualizarEndereco("rua", e.target.value)}
          />
        </label>

        <label className={styles.label}>
          Número
          <input
            className={styles.input}
            value={usuario.endereco.numero}
            onChange={(e) => atualizarEndereco("numero", e.target.value)}
          />
        </label>

        <label className={styles.label}>
          Bairro
          <input
            className={styles.input}
            value={usuario.endereco.bairro}
            onChange={(e) => atualizarEndereco("bairro", e.target.value)}
          />
        </label>

        <label className={styles.label}>
          Cidade
          <input
            className={styles.input}
            value={usuario.endereco.cidade}
            onChange={(e) => atualizarEndereco("cidade", e.target.value)}
          />
        </label>

        <div className={styles.botoes}>
          <button onClick={salvarPerfil} className={styles.button}>
            Salvar
          </button>
          <button onClick={sair} className={`${styles.button} ${styles.sair}`}>
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}
