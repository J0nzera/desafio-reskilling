import Image from "next/image";
import { ClockIcon } from "@heroicons/react/24/outline";
import { formatCurrency } from "@/shared/utils/formatCurrency.util";
import styles from "./CardPizza.module.css";
import Link from "next/link";
import { Pizza } from "@/features/pizzas/interfaces/pizza.interface";

type Props = {
  pizza: Pizza;
};

export function CardPizza({ pizza }: Props) {
  return (
    <Link href={`/pizza/${pizza.slug}`}>
      <div className={styles.cardPizza}>
        <Image
          src={pizza.imagem}
          alt={pizza.nome}
          width={200}
          height={200}
          className={styles.cardPizza__imagem}
        />

        <div className={styles.cardPizza__conteudo}>
          <p className={styles.cardPizza__nome}>{pizza.nome}</p>

          <div className={styles.cardPizza__tempo}>
            <ClockIcon className={styles.cardPizza__iconeTempo} />
            <span className={styles.cardPizza__textoTempo}>
              {pizza.tempoEntrega}
            </span>
          </div>

          <p className={styles.cardPizza__descricao}>{pizza.descricao}</p>

          <span className={styles.cardPizza__preco}>
            {formatCurrency(pizza.valor)}
          </span>
        </div>
      </div>
    </Link>
  );
}
