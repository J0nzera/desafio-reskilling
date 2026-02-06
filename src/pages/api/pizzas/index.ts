// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Pizza } from "@/features/pizzas/interfaces/pizza.interface";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Pizza[]>,
) {
  res.status(200).json([
    {
      slug: "calabresa",
      nome: "Pizza Calabresa",
      descricao: "Pizza clássica de calabresa com cebola.",
      valor: 35,
      tempoEntrega: "45 min",
      imagem: "/pizzas/calabresa.png",
    },
    {
      slug: "frango-catupiry",
      nome: "Pizza de Frango com Catupiry",
      descricao: "Frango desfiado com catupiry cremoso.",
      valor: 35,
      tempoEntrega: "45 min",
      imagem: "/pizzas/frango-catupiry.png",
    },
    {
      slug: "lombo-bacon",
      nome: "Pizza de Lombo com Bacon",
      descricao: "Lombo suíno com bacon crocante.",
      valor: 35,
      tempoEntrega: "45 min",
      imagem: "/pizzas/lombo-bacon.png",
    },
    {
      slug: "marguerita",
      nome: "Pizza Marguerita",
      descricao: "Clássica italiana com manjericão fresco.",
      valor: 35,
      tempoEntrega: "45 min",
      imagem: "/pizzas/marguerita.png",
    },
    {
      slug: "pepperoni",
      nome: "Pizza Pepperoni",
      descricao: "Pepperoni levemente picante.",
      valor: 35,
      tempoEntrega: "45 min",
      imagem: "/pizzas/pepperoni.png",
    },
    {
      slug: "mussarela",
      nome: "Pizza Mussarela",
      descricao: "Simples, clássica e deliciosa.",
      valor: 35,
      tempoEntrega: "45 min",
      imagem: "/pizzas/mussarela.png",
    },
    {
      slug: "quatro-queijos",
      nome: "Pizza Quatro Queijos",
      descricao: "Mistura cremosa de quatro queijos.",
      valor: 35,
      tempoEntrega: "45 min",
      imagem: "/pizzas/quatro-queijos.png",
    },
    {
      slug: "portuguesa",
      nome: "Pizza Portuguesa",
      descricao: "Tradicional e completa.",
      valor: 35,
      tempoEntrega: "45 min",
      imagem: "/pizzas/portuguesa.png",
    },
  ]);
}
