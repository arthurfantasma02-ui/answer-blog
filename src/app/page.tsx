import styles from "./page.module.css";
import Grid from "@/components/Grid";
import { Artigos } from "@/lib/artigos";
export default function Home() {
  return (
    
    <Grid artigo={Artigos}/>
  );
}
