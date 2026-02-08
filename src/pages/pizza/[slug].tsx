import { GetStaticPaths, GetStaticProps } from "next";
import { DetalhePizza } from "@/features/pizzas/interfaces/pizza.interface";
import {
  getPizzas,
  getDetalhePizza,
} from "@/features/pizzas/services/pizza.service";
import DetalhePizzaPage from "@/features/pizzas/DetalhePizzaPage";

interface DetalhePizzaProps {
  pizza: DetalhePizza;
}

export default function Detalhe({ pizza }: DetalhePizzaProps) {
  return <DetalhePizzaPage pizza={pizza} />;
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
    revalidate: 60,
  };
};
