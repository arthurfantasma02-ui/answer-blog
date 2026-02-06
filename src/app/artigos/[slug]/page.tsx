import { Artigo } from "@/artigos/artigos";
type props = {
  artigo: Artigo;
};

const ArtigoPage = ({artigo} : props ) => {
    
  return <div>
    <h1>{artigo.title}</h1>
    <img src={artigo.img} alt={artigo.slug} />
    <p>{artigo.description}</p>
    {Array.isArray(artigo.content) ? (
      artigo.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)
    ) : (
      <p>{artigo.content}</p>
    )}
  </div>;
};

export default ArtigoPage;