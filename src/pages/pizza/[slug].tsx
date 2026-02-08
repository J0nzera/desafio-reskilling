import Image from "next/image";
import styles from "./DetalhePizza.module.css";
import { GetStaticPaths, GetStaticProps } from "next";
import { DetalhePizza } from "@/features/pizzas/interfaces/pizza.interface";
import {
  getPizzas,
  getDetalhePizza,
} from "@/features/pizzas/services/pizza.service";
import { ClockIcon } from "@heroicons/react/24/outline";
import { formatCurrency } from "@/shared/utils/formatCurrency.util";

interface DetalhePizzaProps {
  pizza: DetalhePizza;
}

export default function Detalhe({ pizza }: DetalhePizzaProps) {
  return (
    <main className={styles.main}>
      <div className={styles.containerImagem}>
        <Image src={pizza.imagem} alt={pizza.nome} fill priority />
      </div>

      <div className={styles.containerInfo}>
        <h1 className={styles.nomePizza}>{pizza.nome}</h1>

        <div className={styles.containerTempo}>
          <ClockIcon className={styles.timeIcon} />
          <span className={styles.timeText}>{pizza.tempoEntrega}</span>
        </div>
      </div>

      <span className={styles.price}>{formatCurrency(pizza.valor)}</span>

      <div className={styles.containerDescricao}>
        <p className={styles.descricao}>{pizza.descricao}</p>
      </div>

      <div className={styles.containerIngredientes}>
        <h2 className={styles.tituloIngredientes}>Ingredientes</h2>
        <ul className={styles.listaIngredientes}>
          {pizza.ingredientes.map((ingrediente) => (
            <li key={ingrediente} className={styles.ingrediente}>
              {ingrediente}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.containerVoltar}>
        <button className={styles.voltarButton}>Voltar</button>
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pizzas = await getPizzas();

  const paths = pizzas.map((pizza) => ({
    params: { slug: pizza.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<DetalhePizzaProps> = async (
  contexto,
) => {
  const { slug } = contexto.params as { slug: string };

  const pizza = await getDetalhePizza(slug);

  if (!pizza) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pizza,
    },
    revalidate: 60, // ISR
  };
};
