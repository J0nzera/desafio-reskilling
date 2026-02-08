import { Pizza } from "@/features/pizzas/interfaces/pizza.interface";
import styles from "./Home.module.css";
import { CardPizza } from "./components/CardPizza";

interface HomeProps {
  pizzas: Pizza[];
}

export default function HomePage({ pizzas }: HomeProps) {
  return (
    <div className={styles.home}>
      <main className={styles.home__conteudo}>
        <div className={styles.home__lista}>
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.slug} pizza={pizza} />
          ))}
        </div>
      </main>
    </div>
  );
}
