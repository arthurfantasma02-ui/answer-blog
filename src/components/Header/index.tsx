
import styles from "./Header.module.css";

import Link from "next/link";

const header = () => {
  return <header className={styles.header}>
    <h1 className={styles.header_title}> <Link href="/">Answer Blog</Link></h1>
    <nav className={styles.header_nav}>

        <Link href="/">Inicio</Link> 
        <Link href="/artigos/sobre">Sobre</Link>

    </nav>
  </header>
  
};

export default header;