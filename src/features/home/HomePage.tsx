import { Pizza } from "@/features/pizzas/interfaces/pizza.interface";
import styles from "./Home.module.css";
import { CardPizza } from "./components/CardPizza";

interface HomeProps {
  pizzas: Pizza[];
}

export default function HomePage({ pizzas }: HomeProps) {
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
