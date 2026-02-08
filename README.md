# Mini Aplicação Fullstack – Pizzaria (Next.js)

## Sobre o Projeto

Este projeto foi desenvolvido como **trabalho final de certificação**, utilizando Next.js para consolidar os conceitos aprendidos durante as capacitações de HTML, CSS, JavaScript, TypeScript, React e Node.js.

A aplicação simula uma pizzaria, contendo:

- Visualizar uma listagem de pizzas
- Acessar o detalhe de cada produto
- Realizar um login simples
- Editar seus dados em uma página de perfil

## Telas da Aplicação

### Home – Listagem de Pizzas (SSG)

Exibe uma listagem estática de pizzas

Cada pizza apresenta:

- Nome
- Descrição curta
- Imagem
- Tempo de entrega
- Preço

Os dados são obtidos via **SSG (Static Site Generation)**, conforme exigido no enunciado.

Como o conteúdo apresentado é exatamente o mesmo para qualquer usuário que acessar a aplicação, independentemente de quem esteja acessando, o HTML entregue pela Home é sempre igual, já que se trata apenas de uma vitrine de produtos e não depende de login ou de qualquer informação do usuário.

Com o SSG, essa página é gerada uma única vez no momento do build da aplicação e reutilizada para todos os acessos. Isso deixa o carregamento mais rápido e simplifica a lógica da página, já que não é necessário refazer chamadas ou gerar o conteúdo a cada requisição.

### Detalhe da Pizza (ISR)

Página acessada via rota dinâmica (/pizza/[slug])

Exibe informações completas da pizza:

- Nome
- Descrição completa
- Ingredientes
- Preço
- Tempo de entrega

Utiliza **ISR (Incremental Static Regeneration)** com `getStaticPaths` e `getStaticProps`

**Motivo da escolha (ISR):**

O funcionamento do ISR fez sentido para este projeto da seguinte forma: quando um usuário acessa pela primeira vez o detalhe de uma pizza específica, o Next.js executa as chamadas necessárias, gera a página e armazena esse resultado em cache. A partir desse momento, quando outros usuários acessarem a mesma rota, o conteúdo é servido diretamente desse cache, sem a necessidade de refazer a requisição a cada acesso.

Isso traz um ganho claro de performance, já que evita chamadas desnecessárias, principalmente em um cenário onde o conteúdo exibido é basicamente informativo. No contexto da aplicação, os dados da pizza não mudam constantemente, então não faz sentido recalcular essa página a todo momento. Ao mesmo tempo, o uso do `revalidate` permite que, caso alguma informação seja alterada no futuro, a página seja atualizada automaticamente após um determinado período.

Dessa forma, o ISR se encaixa bem no projeto por equilibrar performance e atualização de dados, sendo uma estratégia muito comum em aplicações do tipo e-commerce.

### Login e Perfil do Usuário (CSR)

As páginas de Login e Perfil utilizam **Client Side Rendering (CSR)**, conforme exigido no enunciado.

O login é apenas uma simulação de autenticação leve, utilizando estado local e `localStorage`. Após o login, os dados do usuário ficam armazenados no navegador e são utilizados na página de perfil.

Na página de perfil, o usuário pode:

- Visualizar seus dados,
- Editar informações pessoais,
- Editar o endereço,
- Salvar as alterações,
- Realizar logout.

Como essas informações são específicas de cada usuário e dependem diretamente do estado da aplicação no navegador, o CSR é a abordagem mais simples e adequada para esse cenário.

## API Routes

O projeto possui API Routes internas, simulando um backend:

**Endpoints criados:**

- GET /api/pizzas
  - Retorna a listagem de pizzas

- GET /api/pizzas/[slug]
  - Retorna o detalhe de uma pizza específica

Os dados são **mockados**, apenas para fins de simulação e aprendizado.

## Estilização

A estilização foi feita utilizando **CSS Modules**. Essa abordagem permite manter os estilos isolados por componente, evitando conflitos de classes.

O layout foi desenvolvido seguindo o conceito de mobile first, com ajustes específicos para desktop utilizando media queries. Foram utilizados Flexbox e CSS Grid, conforme a necessidade de cada tela.

Para a nomenclatura das classes foi adotado o **padrão BEM (Block Element Modifier)**, o que ajuda a deixar os estilos mais organizados e fáceis de entender conforme a aplicação cresce.

**Exemplo:**

```
.cardPizza
.cardPizza__imagem
.cardPizza__conteudo
```

## Estrutura de Pastas

O projeto foi organizado seguindo o conceito de organização por feature, facilitando escalabilidade e manutenção.

A pasta `pages` foi mantida com foco apenas nas **rotas da aplicação**, conforme o padrão do Next.js. Nela ficam as páginas que representam entradas diretas da aplicação, além das API Routes.

As regras de negócio, componentes específicos, interfaces e mocks foram organizados dentro da pasta `features`, separando cada funcionalidade da aplicação. Essa abordagem facilita a manutenção e deixa o projeto mais escalável.

A pasta `shared` concentra utilitários e recursos reutilizáveis entre diferentes features, evitando duplicação de código.

```
src/
├── pages/ # Rotas da aplicação (Next.js)
│ ├── index.tsx # Home - listagem de pizzas (SSG)
│ ├── login.tsx # Tela de login (CSR)
│ ├── perfil.tsx # Tela de perfil do usuário (CSR)
│ ├── pizza/
│ │ └── [slug].tsx # Detalhe da pizza (ISR)
│ └── api/
│ └── pizzas/ # API Routes simulando backend
│ ├── index.ts # Listagem de pizzas
│ └── [slug].ts # Detalhe de uma pizza
│
├── features/
│ ├── pizzas/ # Funcionalidades relacionadas às pizzas e lógica e estilos da tela de detalhe
│ │ ├── services/ # Chamadas e regras de acesso aos dados
│ │ ├── interfaces/ # Tipagens e contratos
│ │ └── mock/ # Dados mockados
│ │
│ ├── home/ # Lógica e estilos da tela de home
│ ├── login/ # Lógica e estilos da tela de login
│ └── perfil/ # Lógica e estilos da tela de perfil
│
├── shared/
│ ├── components/ # Componentes específicos (ex: Header)
│ │ └── header/ # Componente de cabeçalho da aplicaçãos
│ └── utils/ # Funções utilitárias reutilizáveis
│   └── formatCurrency.util.ts
│
└── styles/
│ └── globals.css # Estilos globais
```

## Scripts Disponíveis

```
npm run dev # roda o projeto em ambiente de desenvolvimento
npm run build # gera o build de produção
npm run start # roda o build gerado
```
