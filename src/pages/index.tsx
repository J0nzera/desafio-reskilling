import { Pizza } from "@/features/pizzas/interfaces/pizza.interface";
import { getPizzas } from "@/features/pizzas/services/pizza.service";
import { GetStaticProps } from "next";
import HomePage from "@/features/home/HomePage";

interface HomeProps {
  pizzas: Pizza[];
}

export default function Home({ pizzas }: HomeProps) {
  return <HomePage pizzas={pizzas} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const pizzas = await getPizzas();

  return {
    props: {
      pizzas,
    },
  };
};
