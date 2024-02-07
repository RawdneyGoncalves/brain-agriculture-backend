# Brain Agriculture API

Bem-vindo à documentação da API do Brain Agriculture! Esta API foi desenvolvida para operações relacionadas a produtores na área de agricultura. Aqui você encontrará informações sobre a estrutura do projeto, configuração, execução, testes e exploração da API.

## Estrutura do Projeto

O projeto está organizado em pastas específicas, cada uma com uma responsabilidade distinta. Abaixo está uma visão geral das pastas principais:

- **config**: Configurações do banco de dados e da aplicação.

- **controllers**: Controladores para lidar com as requisições HTTP.

- **middlewares**: Middlewares, como o de tratamento de erros.

- **models**: Definição do modelo de dados da entidade `Producer`.

- **routes**: Definição de rotas da API, incluindo configuração Swagger.

- **services**: Lógica de negócios relacionada aos produtores e ao dashboard.

- **swagger**: Configuração Swagger para documentação da API.

- **test**: Arquivos de teste.

- **utils**: Utilitários, incluindo validação e logger.

- **app.ts**: Ponto de entrada da aplicação.

- **Dockerfile**: Arquivo Docker para criar a imagem da aplicação.

## Configuração do Banco de Dados

O arquivo `config.ts` contém as configurações do banco de dados para diferentes ambientes (desenvolvimento, teste e produção). Atualmente, está configurado para usar o PostgreSQL.

## Rodando a Aplicação com Docker

1. Certifique-se de ter o Docker instalado.

2. Navegue até o diretório do projeto no terminal.

3. Execute o comando para construir a imagem Docker:

    ```bash
    docker build -t brain-agriculture-api .
    ```

4. Em seguida, inicie os contêineres:

    ```bash
    docker-compose up
    ```

5. A aplicação estará disponível em [http://localhost:4000](http://localhost:4000).

## Documentação da API

A documentação da API é gerada usando Swagger. Acesse:

- [http://localhost:4000/prdoducers/docs](http://localhost:4000/producers/docs)

## Testando a Aplicação

Certifique-se de ter o Node.js e o Yarn instalados. Execute o seguinte comando para executar os testes:

```bash
yarn test
