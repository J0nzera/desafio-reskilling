import { DetalhePizza } from "../interfaces/pizza.interface";

export const pizzas: DetalhePizza[] = [
  {
    slug: "calabresa",
    nome: "Pizza Calabresa",
    descricao:
      "Uma das pizzas mais tradicionais do Brasil, preparada com calabresa fatiada, cebola e mussarela derretida, trazendo um sabor marcante e equilibrado.",
    valor: 35,
    tempoEntrega: "45 min",
    imagem: "/pizzas/calabresa.png",
    ingredientes: [
      "Calabresa",
      "Mussarela",
      "Cebola",
      "Molho de tomate",
      "Orégano",
    ],
  },
  {
    slug: "frango-catupiry",
    nome: "Pizza de Frango com Catupiry",
    descricao:
      "Uma combinação clássica e muito querida, feita com frango desfiado bem temperado e uma generosa camada de catupiry, garantindo cremosidade a cada fatia.",
    valor: 35,
    tempoEntrega: "45 min",
    imagem: "/pizzas/frango-catupiry.png",
    ingredientes: [
      "Frango desfiado",
      "Catupiry",
      "Mussarela",
      "Molho de tomate",
      "Orégano",
    ],
  },
  {
    slug: "lombo-bacon",
    nome: "Pizza de Lombo com Bacon",
    descricao:
      "Pizza preparada com lombo suíno macio e bacon crocante, combinados com mussarela derretida para um sabor intenso e irresistível.",
    valor: 35,
    tempoEntrega: "45 min",
    imagem: "/pizzas/lombo-bacon.png",
    ingredientes: [
      "Lombo suíno",
      "Bacon",
      "Mussarela",
      "Molho de tomate",
      "Orégano",
    ],
  },
  {
    slug: "marguerita",
    nome: "Pizza Marguerita",
    descricao:
      "Inspirada na receita tradicional italiana, essa pizza combina mussarela, tomate e folhas de manjericão, trazendo frescor e simplicidade.",
    valor: 35,
    tempoEntrega: "45 min",
    imagem: "/pizzas/marguerita.png",
    ingredientes: [
      "Mussarela",
      "Tomate",
      "Manjericão",
      "Molho de tomate",
      "Azeite",
    ],
  },
  {
    slug: "pepperoni",
    nome: "Pizza Pepperoni",
    descricao:
      "Uma pizza intensa e cheia de personalidade, feita com fatias de pepperoni levemente apimentado, mussarela e molho de tomate.",
    valor: 35,
    tempoEntrega: "45 min",
    imagem: "/pizzas/pepperoni.png",
    ingredientes: ["Pepperoni", "Mussarela", "Molho de tomate", "Orégano"],
  },
  {
    slug: "mussarela",
    nome: "Pizza Mussarela",
    descricao:
      "A tradicional pizza de mussarela, com queijo derretido e molho de tomate, perfeita para quem aprecia o sabor clássico.",
    valor: 35,
    tempoEntrega: "45 min",
    imagem: "/pizzas/mussarela.png",
    ingredientes: ["Mussarela", "Molho de tomate", "Orégano"],
  },
  {
    slug: "quatro-queijos",
    nome: "Pizza Quatro Queijos",
    descricao:
      "Uma pizza rica e cremosa feita com a combinação perfeita de quatro queijos selecionados, oferecendo textura e sabor únicos.",
    valor: 35,
    tempoEntrega: "45 min",
    imagem: "/pizzas/quatro-queijos.png",
    ingredientes: [
      "Mussarela",
      "Parmesão",
      "Gorgonzola",
      "Catupiry",
      "Molho de tomate",
    ],
  },
  {
    slug: "portuguesa",
    nome: "Pizza Portuguesa",
    descricao:
      "Uma pizza clássica e bem servida, preparada com presunto, ovo cozido, cebola e azeitonas, trazendo um sabor marcante e equilibrado.",
    valor: 35,
    tempoEntrega: "45 min",
    imagem: "/pizzas/portuguesa.png",
    ingredientes: [
      "Presunto",
      "Ovo cozido",
      "Cebola",
      "Azeitona",
      "Mussarela",
      "Molho de tomate",
    ],
  },
];
