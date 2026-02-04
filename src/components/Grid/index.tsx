
import styles from "./Grid.module.css";
type Props = {
  artigos: string;
};
const Grid = ({artigos} : Props) => {
  return <section className={styles.Grid}>{artigos}</section>;
};

export default Grid;