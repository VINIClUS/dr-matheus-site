# Site institucional — Dr. Matheus Tostes Assis

Site estático, responsivo e pronto para GitHub Pages, desenvolvido em HTML5, CSS3 e JavaScript puro.

## Estrutura

```text
.
├── index.html
├── politica-de-privacidade.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── assets
    ├── css
    │   └── styles.css
    ├── js
    │   └── main.js
    └── img
        ├── dr-matheus-hero-640.webp
        ├── dr-matheus-hero-776.webp
        ├── dr-matheus-hero.jpg
        ├── dr-matheus-about.webp
        ├── dr-matheus-about.jpg
        ├── og-image.jpg
        ├── og-image.webp
        ├── favicon.svg
        ├── logo-mta.svg
        └── organic-pattern.svg
```

## Personalização obrigatória antes de publicar

Procure e substitua os placeholders abaixo nos arquivos `index.html`, `politica-de-privacidade.html`, `robots.txt` e `sitemap.xml`:

- `[INSERIR_WHATSAPP]`
- `55DDDNUMERO`
- `[INSERIR_INSTAGRAM]`
- `[INSERIR_EMAIL]`
- `[INSERIR_ENDERECO]`
- `[INSERIR_LINK_MAPS]`
- `[INSERIR_CIDADE]`
- `https://www.seudominio.com.br/`

### WhatsApp

O link já está no formato:

```text
https://wa.me/55DDDNUMERO?text=Ol%C3%A1%2C%20Dr.%20Matheus.%20Gostaria%20de%20agendar%20uma%20consulta.
```

Troque `55DDDNUMERO` pelo número completo, somente com dígitos. Exemplo fictício: `5511999999999`.

### SEO e Open Graph

Atualize em `index.html`:

- `link rel="canonical"`
- `og:url`
- `og:image`
- JSON-LD `url`, `image`, `telephone`, `address` e `sameAs`

Atualize também o domínio em:

- `robots.txt`
- `sitemap.xml`

## Publicação no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos deste projeto para o repositório.
3. Acesse **Settings > Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/root`.
6. Salve e aguarde o GitHub gerar a URL pública.
7. Caso tenha domínio próprio, configure em **Custom domain** e ajuste `sitemap.xml`, `robots.txt`, canonical e Open Graph para o domínio final.

## Notas de conteúdo médico e ética

O texto foi escrito para manter tom institucional, informativo e ético, evitando:

- promessas de resultado;
- “antes e depois”;
- depoimentos de pacientes;
- linguagem sensacionalista;
- termos como “melhor médico”;
- indução de especialidade sem RQE informado.

Há um comentário editável na seção “Sobre” para inserir formações complementares comprovadas, caso existam. Evite termos de especialidade sem RQE.

## Performance

- Imagens principais foram exportadas em WebP, com fallback JPG.
- O JavaScript é mínimo e não depende de bibliotecas externas.
- O menu mobile é acessível por teclado e usa `aria-expanded`.
- As animações respeitam `prefers-reduced-motion`.
- Não há formulário com coleta de dados sensíveis.
- Não há analytics, pixels ou cookies não essenciais na versão inicial.

## Política de Privacidade

A página `politica-de-privacidade.html` informa:

- dados de contato que podem ser fornecidos voluntariamente;
- finalidade de agendamento/contato;
- não coleta de dados clínicos pelo site;
- uso de links externos como WhatsApp, Instagram e Google Maps;
- canal para solicitação de alteração/remoção de dados;
- aviso sobre cookies caso analytics ou pixels sejam adicionados no futuro.
