import Image from "next/image";
import { Pizza } from "../interfaces/pizza.interface";
import { ClockIcon } from "@heroicons/react/24/outline";
import { formatCurrency } from "@/shared/utils/formatCurrency.util";
import styles from "./CardPizza.module.css";

type Props = {
  pizza: Pizza;
};

export function CardPizza({ pizza }: Props) {
  return (
    <div className={styles.card}>
      <Image
        src={pizza.imagem}
        alt={pizza.nome}
        width={200}
        height={200}
        className={styles.image}
      />

      <div className={styles.content}>
        <p className={styles.name}>{pizza.nome}</p>

        <div className={styles.timeContainer}>
          <ClockIcon className={styles.timeIcon} />
          <span className={styles.timeText}>{pizza.tempoEntrega}</span>
        </div>

        <p className={styles.description}>{pizza.descricao}</p>

        <span className={styles.price}>{formatCurrency(pizza.valor)}</span>
      </div>
    </div>
  );
}
