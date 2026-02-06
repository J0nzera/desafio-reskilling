import Image from "next/image";
import { Pizza } from "../interfaces/pizza.interface";
import { ClockIcon } from "@heroicons/react/24/outline";
import { formatCurrency } from "@/shared/utils/formatCurrency.util";

type Props = {
  pizza: Pizza;
};

export function CardPizza({ pizza }: Props) {
  return (
    <div className="shadow-md rounded-xl bg-white overflow-hidden w-50">
      <Image src={pizza.imagem} alt={pizza.nome} width={200} height={200} />

      <div className="p-2">
        <p className="text-sm text-black">{pizza.nome}</p>

        <div className="flex items-center">
          <ClockIcon className="w-5 h-5 text-green-600 my-2" />
          <span className="text-xs font-semibold text-green-600 ml-1">
            {pizza.tempoEntrega}
          </span>
        </div>

        <p className="text-xs text-black mb-2">{pizza.descricao}</p>

        <span className="text-sm font-bold text-black">
          {formatCurrency(pizza.valor)}
        </span>
      </div>
    </div>
  );
}
