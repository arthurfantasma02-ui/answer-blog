# Answer Blog 🎧✍️

Aplicação de blog criada com **Next.js (App Router)**, onde os artigos são carregados dinamicamente através de rotas personalizadas. O projeto utiliza **Server Components**, geração estática (SSG) e **SEO dinâmico** por artigo.

Este projeto foi desenvolvido como atividade prática para consolidar conceitos modernos do Next.js.

---

## 🚀 Objetivo do Projeto

Criar uma aplicação de blog que:

* Liste artigos em uma página inicial
* Renderize cada artigo em uma rota dinâmica baseada em *slug*
* Utilize boas práticas de SEO
* Faça uso do App Router e Server Components

---

## 🧱 Estrutura de Rotas

```
app/
├─ page.tsx                # Página inicial (lista de artigos)
└─ artigos/
   └─ [slug]/
      └─ page.tsx          # Página dinâmica do artigo
```

---

## 📦 Fonte dos Dados

Os dados dos artigos são carregados a partir de um **JSON local**, abstraído por uma função de acesso (`getArtigos`).

Cada artigo contém:

* `slug`
* `title`
* `description`
* `author`
* `date`
* `content`

O carregamento é feito diretamente em **Server Components**, utilizando `async/await`, sem uso de `useEffect`.

---

## ⚙️ Data Fetching & Renderização

* Utilização de **SSG (Static Site Generation)**
* Função `generateStaticParams` para pré-gerar todas as rotas dos artigos
* Configuração `dynamic = "force-static"`
* Tratamento de rotas inválidas com `notFound()`

---

## 🔍 SEO Dinâmico

Cada artigo possui metadados próprios gerados dinamicamente com:

```ts
export async function generateMetadata({ params })
```

Metadados implementados:

* `title`
* `description`

Isso garante melhor indexação e compartilhamento em redes sociais.

---

## 🧩 Componentização

O layout do projeto é organizado com componentes reutilizáveis:

* **Card** → exibição resumida do artigo
* **Grid** → organização visual da listagem

Essa abordagem melhora a manutenção, leitura e escalabilidade do código.

---

## 🎨 Tipografia

O projeto utiliza **next/font**, garantindo melhor performance e carregamento otimizado das fontes.

---

## 🌐 Deploy

O projeto está pronto para deploy na **Vercel**:

1. Repositório hospedado no GitHub
2. Deploy realizado via Vercel
3. Aplicação acessível publicamente

---

## 🛠️ Tecnologias Utilizadas

* Next.js (App Router)
* React
* TypeScript
* CSS Modules
* Vercel

---

## 📌 Repositório

🔗 [https://github.com/arthurfantasma02-ui/answer-blog](https://github.com/arthurfantasma02-ui/answer-blog)

---

> Projeto desenvolvido com foco em aprendizado prático e consolidação dos conceitos modernos do Next.js.
