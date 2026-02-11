import { notFound } from "next/navigation";
import { getArtigos } from "@/app/Data/artigos";
import styles from "./page.module.css";


/**
 * Tipagem correta para Next 15/16
 * params agora é Promise
 */
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/**
 * Página do artigo
 */
export default async function ArtigosPage({ params }: Props) {
  // 🔥 Desembrulha o params corretamente
  const { slug } = await params;

  // Busca os artigos
  const artigos = await getArtigos();

  // Encontra o artigo pelo slug
  const artigo = artigos.find((a) => a.slug === slug);

  // Se não encontrar → 404 real
  if (!artigo) {
    notFound();
  }

  return (
    <article className={styles.article}>
      <h1 className={styles.article_h1}>
        {artigo.title}
      </h1>


      <div className={styles.article_p}>
        {artigo.content.map((paragrafo, index) => (
          <p key={index}>{paragrafo}</p>
        ))}
      </div>
    </article>
  );
}

/**
 * Metadata dinâmica (SEO)
 */
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const artigos = await getArtigos();
  const artigo = artigos.find((a) => a.slug === slug);

  if (!artigo) {
    return {
      title: "Artigo não encontrado",
    };
  }

  return {
    title: artigo.title,
    description: artigo.description,
  };
}
