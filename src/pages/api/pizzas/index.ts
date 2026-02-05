// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Pizza } from "@/features/pizzas/mock/interfaces/pizza.interface";
import type { NextApiResponse } from "next";

export default function handler(res: NextApiResponse<Pizza[]>) {
  res.status(200).json([
    {
      nome: "Calabresa",
      slug: "calabresa",
      descricao: "Descrição da pizza muito legal bem interessante",
      imagem: "/pizzas/calabresa.png",
    },
    {
      nome: "Frango",
      slug: "frango",
      descricao: "Descrição da pizza muito legal bem interessante",
      imagem: "/pizzas/frango.png",
    },
    {
      nome: "Lombo com bacon",
      slug: "lombo-bacon",
      descricao: "Descrição da pizza muito legal bem interessante",
      imagem: "/pizzas/lombo-bacon.png",
    },
    {
      nome: "Marguerita",
      slug: "marguerita",
      descricao: "Descrição da pizza muito legal bem interessante",
      imagem: "/pizzas/marguerita.png",
    },
    {
      nome: "Mussarela",
      slug: "mussarela",
      descricao: "Descrição da pizza muito legal bem interessante",

      imagem: "/pizzas/mussarela.png",
    },
    {
      nome: "Pepperoni",
      slug: "pepperoni",
      descricao: "Descrição da pizza muito legal bem interessante",
      imagem: "/pizzas/pepperoni.png",
    },
    {
      nome: "Portuguesa",
      slug: "portuguesa",
      descricao: "Descrição da pizza muito legal bem interessante",
      imagem: "/pizzas/portuguesa.png",
    },
    {
      nome: "Quatro Queijos",
      slug: "quatro-queijos",
      descricao: "Descrição da pizza muito legal bem interessante",
      imagem: "/pizzas/quatro-queijos.png",
    },
  ]);
}
