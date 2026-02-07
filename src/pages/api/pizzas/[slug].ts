// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { pizzas } from "@/features/pizzas/mocks/pizzas.mock";
import { DetalhePizza } from "@/features/pizzas/interfaces/pizza.interface";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DetalhePizza | undefined>,
) {
  const { slug } = req.query;

  const pizza = pizzas.find((pizza) => pizza.slug === slug);

  return res.status(200).json(pizza);
}
