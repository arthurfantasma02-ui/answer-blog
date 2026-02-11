import styles from "./Card.module.css";
import Link from "next/link";
import { Artigo } from "@/app/Data/artigos";


type Props = {
  artigo: Artigo;
};

const Card = ({ artigo }: Props) => {
  return (
    <div className={styles.Card}>
      <Link href={`/artigos/${artigo.slug}`}>
        <img
          src={artigo.img}
          alt={artigo.slug}
          className={styles.Card_img}
        />
      </Link>

      <Link href={`/artigos/${artigo.slug}`}>
        <h2 className={styles.Card_title}>{artigo.title}</h2>
      </Link>

      <p className={styles.Card_description}>
        {artigo.description}
      </p>
    </div>
  );
};

export default Card;
