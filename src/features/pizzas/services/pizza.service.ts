import { DetalhePizza, Pizza } from "../interfaces/pizza.interface";

export async function getPizzas(): Promise<Pizza[]> {
  const res = await fetch("http://localhost:3000/api/pizzas");
  return res.json();
}

export async function getDetalhePizza(pizza: string): Promise<DetalhePizza> {
  const res = await fetch(`http://localhost:3000/api/pizzas/${pizza}`);
  return res.json();
}
