# To-Do List App

Este projeto foi desenvolvido como parte de um desafio para demonstrar minhas habilidades no desenvolvimento web e para concorrer a oportunidades de trabalho freelancer.

## Visão Geral

A aplicação consiste em uma lista de tarefas (To-Do List), responsiva, com funcionalidades de cadastro, login, adição, conclusão e remoção de tarefas. Utiliza React, StyledComponents, TypeScript e Axios como principais tecnologias.

## Funcionalidades

- **Cadastro de Usuários**: O usuário pode se cadastrar na aplicação, fornecendo informações e uma senha válida, seguindo critérios específicos:
  - Senha: Deve conter no mínimo 6 caracteres, com pelo menos um caractere maiúsculo, um minúsculo, um número e um caractere especial.

- **Login**: Após o cadastro, é possível fazer login na plataforma.
  - Restrição de Acesso: Usuários logados não podem acessar rotas de cadastro ou login, sendo redirecionados à página principal.

- **Adição de Tarefas**: Os usuários podem adicionar novas tarefas à lista.

- **Marcação de Tarefas Concluídas**: Capacidade de marcar tarefas como concluídas.

- **Exclusão de Tarefas**: Remoção de tarefas da lista.

- **Filtragem de Tarefas**: Possibilidade de filtrar tarefas por status (pendentes ou concluídas).

## Estrutura do Projeto

O projeto foi desenvolvido utilizando uma estrutura de pastas e componentes para facilitar a manutenção e escalabilidade:

src/
│
├── components/
│   ├── Login/
│   ├── Registration/
│   ├── TaskList/
│   ├── Filter/
│   └── ...
│
├── pages/
│   ├── Main/
│   ├── Login/
│   ├── Registration/
│   └── ...
│
├── api/
│   └── axiosConfig.js
│
├── hooks/
│   ├── useAuth.js
│   └── ...
│
└── ...


## Tecnologias Utilizadas

- **React**: Biblioteca principal para desenvolvimento do front-end.
- **Context-API**:  Funcionalidade do React para lidar com a propagação de dados entre components.
- **StyledComponents**: Para estilização de componentes.
- **TypeScript**: Utilizado para tipagem estática.
- **Axios**: Utilizado para realizar requisições HTTP à API fornecida.

## Considerações Finais

Para a criação da aplicação utilizei o modelo Mobile-First, pois acredito que esta é a melhor maneira de desenvolver aplicações responsivas e adaptáveis para diferentes tamanhos de tela. 
Ademais, ressalto que este desafio foi uma excelente oportunidade para aprimorar habilidades em desenvolvimento web e consolidar conhecimentos em tecnologias como React e TypeScript. Agradecimentos à empresa pela oportunidade oferecida.

# Login
![login](https://github.com/FWalterDias/Portfolio/assets/100762742/9e8e9d83-808f-4bb9-8ac7-acbaca262d05) 

# Cadastro
![cadastro](https://github.com/FWalterDias/Portfolio/assets/100762742/e77eeac4-0a82-4a55-b83b-ba68d3a8d802)

# Home
![home](https://github.com/FWalterDias/Portfolio/assets/100762742/4f9d40cd-d074-4547-af95-44e30cc65b68)

# Filtro
![filtro](https://github.com/FWalterDias/Portfolio/assets/100762742/cc4eddbc-8bf0-4fc8-8d3a-4d7e88af3aa9)
