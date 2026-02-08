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
    <main className={styles.perfil}>
      <div className={styles.perfil__card}>
        <h1 className={styles.perfil__titulo}>Meu Perfil</h1>

        <label className={styles.perfil__campo}>
          Nome
          <input
            className={styles.perfil__input}
            value={usuario.nome}
            onChange={(e) => atualizarCampo("nome", e.target.value)}
          />
        </label>

        <label className={styles.perfil__campo}>
          Email
          <input
            className={styles.perfil__input}
            value={usuario.email}
            onChange={(e) => atualizarCampo("email", e.target.value)}
          />
        </label>

        <h2 className={styles.perfil__subtitulo}>Endereço</h2>

        <label className={styles.perfil__campo}>
          Rua
          <input
            className={styles.perfil__input}
            value={usuario.endereco.rua}
            onChange={(e) => atualizarEndereco("rua", e.target.value)}
          />
        </label>

        <label className={styles.perfil__campo}>
          Número
          <input
            className={styles.perfil__input}
            value={usuario.endereco.numero}
            onChange={(e) => atualizarEndereco("numero", e.target.value)}
          />
        </label>

        <label className={styles.perfil__campo}>
          Bairro
          <input
            className={styles.perfil__input}
            value={usuario.endereco.bairro}
            onChange={(e) => atualizarEndereco("bairro", e.target.value)}
          />
        </label>

        <label className={styles.perfil__campo}>
          Cidade
          <input
            className={styles.perfil__input}
            value={usuario.endereco.cidade}
            onChange={(e) => atualizarEndereco("cidade", e.target.value)}
          />
        </label>

        <div className={styles.perfil__botoes}>
          <button onClick={salvarPerfil} className={styles.perfil__botao}>
            Salvar
          </button>

          <button
            onClick={sair}
            className={`${styles.perfil__botao} ${styles.perfil__botaoSair}`}
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}
