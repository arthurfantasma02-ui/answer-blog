
import Artigos from "@/lib/artigos";

export type Artigo = {
  slug: string;
  title: string;
  description: string;
  img: string;
  content:string[];
}

export async function getArtigos(): Promise<Artigo[]> {
  return Artigos;
}

export async function getArtigo(slug: string){
  const artigo = await getArtigos();
  return artigo.find(artigo => artigo.slug === slug);

}