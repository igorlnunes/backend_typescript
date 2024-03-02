# DioBank API

Este repositório representa o desafio final do curso de "Introdução ao Node com TypeScript" da [Digital Innovation One (DIO)](https://www.dio.me/), onde o objetivo é criar uma API para o DioBank.

## Sobre o Curso

O curso "Introdução ao Node com TypeScript" oferece uma introdução ao desenvolvimento de aplicações back-end utilizando Node.js e TypeScript. Ao final do curso, os alunos são desafiados a criar uma API completa para o DioBank.

## Conceitos Importantes

### Back-end

O **back-end** de uma aplicação é a parte responsável por processar as requisições do cliente, realizar operações no banco de dados e retornar os dados para o cliente. Ele lida com a lógica de negócios e fornece os serviços necessários para a interface do usuário.

### APIs, Controllers e Services

- **APIs**: Uma **API (Interface de Programação de Aplicações)** é um conjunto de rotas e endpoints que define como os clientes podem interagir com o back-end. Ela define quais operações podem ser realizadas e como os dados serão transferidos.
  
- **Controllers**: Os **controllers** são responsáveis por receber as requisições HTTP, chamar os serviços necessários para processar essas requisições e retornar a resposta adequada para o cliente. Eles atuam como intermediários entre as rotas da API e a lógica de negócios.

- **Services**: Os **services** são responsáveis por implementar a lógica de negócios da aplicação. Eles encapsulam a lógica de processamento dos dados e podem ser reutilizados em diferentes partes da aplicação.

### Importância para um Profissional de Front-end

Entender os conceitos de back-end, APIs, controllers e services é importante para um profissional de front-end por diversos motivos:

- **Integração com o Back-end**: Conhecer como o back-end funciona permite uma melhor integração entre front-end e back-end, facilitando o desenvolvimento de aplicações completas.
  
- **Compreensão da Arquitetura**: Compreender a arquitetura da aplicação como um todo ajuda a criar interfaces mais eficientes e a resolver problemas de forma mais eficaz.

### Testes Unitários e Jest

Os **testes unitários** são essenciais para garantir que cada parte da aplicação funciona como esperado de forma isolada. A biblioteca **Jest** é uma ferramenta popular para escrever e executar testes unitários em JavaScript e TypeScript.

## Replicando o Repositório Localmente

Para replicar este repositório em sua máquina local, siga estes passos:

1. Clone o repositório:

    ```bash
    git clone https://github.com/igorlnunes/backend_typescript
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd backend_typescript
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

4. Execute o servidor localmente:

    ```bash
    npm start
    ```

Agora você pode explorar e estudar a implementação da API do DioBank localmente!