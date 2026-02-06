
import {Artigo} from "@/artigos/artigos";
import Card from "@/components/Card";
import styles from "./Grid.module.css";



type Props = {
  artigo: Artigo[];
};
const Grid = ({ artigo }: Props) => {
  return <section className={styles.Grid}>
    {artigo.map((artigo) => (
      <Card artigo={artigo} key={artigo.slug} />
    ))}
  </section>;
}

export default Grid;
