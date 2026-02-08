import Image from "next/image";
import styles from "./DetalhePizza.module.css";
import { DetalhePizza } from "@/features/pizzas/interfaces/pizza.interface";
import { ClockIcon } from "@heroicons/react/24/outline";
import { formatCurrency } from "@/shared/utils/formatCurrency.util";
import { useRouter } from "next/router";

interface DetalhePizzaProps {
  pizza: DetalhePizza;
}

export default function DetalhePizzaPage({ pizza }: DetalhePizzaProps) {
  const router = useRouter();

  return (
    <main className={styles.pizzaDetalhe}>
      <div className={styles.pizzaDetalhe__imagemContainer}>
        <Image
          src={pizza.imagem}
          alt={pizza.nome}
          fill
          className={styles.pizzaDetalhe__imagem}
        />
      </div>

      <div>
        <div className={styles.pizzaDetalhe__info}>
          <h1 className={styles.pizzaDetalhe__nome}>{pizza.nome}</h1>

          <div className={styles.pizzaDetalhe__tempo}>
            <ClockIcon className={styles.pizzaDetalhe__tempoIcone} />
            <span className={styles.pizzaDetalhe__tempoTexto}>
              {pizza.tempoEntrega}
            </span>
          </div>
        </div>

        <span className={styles.pizzaDetalhe__preco}>
          {formatCurrency(pizza.valor)}
        </span>

        <div className={styles.pizzaDetalhe__descricaoContainer}>
          <p className={styles.pizzaDetalhe__descricao}>{pizza.descricao}</p>
        </div>

        <div className={styles.pizzaDetalhe__ingredientes}>
          <h2 className={styles.pizzaDetalhe__ingredientesTitulo}>
            Ingredientes
          </h2>

          <ul className={styles.pizzaDetalhe__ingredientesLista}>
            {pizza.ingredientes.map((ingrediente) => (
              <li
                key={ingrediente}
                className={styles.pizzaDetalhe__ingrediente}
              >
                {ingrediente}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.pizzaDetalhe__voltarDesktop}>
          <button
            className={styles.pizzaDetalhe__voltarBotao}
            onClick={() => router.back()}
          >
            Voltar
          </button>
        </div>
      </div>

      <div className={styles.pizzaDetalhe__voltarMobile}>
        <button
          className={styles.pizzaDetalhe__voltarBotao}
          onClick={() => router.back()}
        >
          Voltar
        </button>
      </div>
    </main>
  );
}
