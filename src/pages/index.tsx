import { CardPizza } from "@/features/pizzas/components/CardPizza";
import { Pizza } from "@/features/pizzas/interfaces/pizza.interface";
import { getPizzas } from "@/features/pizzas/services/pizza.service";
import { GetStaticProps } from "next";
import styles from "./Home.module.css";

interface HomeProps {
  pizzas: Pizza[];
}

export default function Home({ pizzas }: HomeProps) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.slug} pizza={pizza} />
          ))}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const pizzas = await getPizzas();

  return {
    props: {
      pizzas,
    },
  };
};
