export interface Pizza {
  slug: string;
  nome: string;
  descricao: string;
  valor: number;
  tempoEntrega: string;
  imagem: string;
}

export interface DetalhePizza extends Pizza {
  ingredientes: string[];
}
