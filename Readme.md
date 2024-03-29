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

- [http://localhost:4000/producers/docs](http://localhost:4000/producers/docs)

## Testando a Aplicação

Certifique-se de ter o Node.js Python instalados. Siga a documentação para realizar os testes: 

## Testes Python para a API RESTful

Este repositório inclui conjuntos de testes em Python que podem ser usados para testar uma API RESTful. Os testes foram escritos usando a biblioteca `unittest` do Python e a biblioteca `requests` para fazer requisições HTTP para a API.

### Estrutura dos Testes

Os testes estão organizados em conjuntos para cada operação CRUD (Create, Read, Update, Delete) da API. Cada conjunto de testes aborda cenários específicos para garantir a funcionalidade correta da API em diferentes situações.

- **Teste de Criação de Produtor**: Testa a criação de novos produtores.
- **Teste de Exclusão de Produtor**: Testa a exclusão de produtores existentes.
- **Teste de Leitura de Produtor**: Testa a leitura de produtores existentes.
- **Teste de Atualização de Produtor**: Testa a atualização de produtores existentes.

### Relação com a API RESTful

Os testes em Python interagem diretamente com os endpoints da API RESTful. Aqui está como eles se relacionam com os endpoints da API:

- **Teste de Criação de Produtor**: Verifica se a API pode criar um novo produtor com dados válidos e lidar corretamente com dados inválidos ou ausentes.
- **Teste de Exclusão de Produtor**: Verifica se a API pode excluir um produtor existente e lidar com diferentes cenários, como IDs inválidos ou inexistentes.
- **Teste de Leitura de Produtor**: Verifica se a API pode obter produtores existentes e lidar com diferentes casos, como IDs válidos, inválidos ou inexistentes.
- **Teste de Atualização de Produtor**: Verifica se a API pode atualizar um produtor existente com dados válidos e lidar corretamente com dados inválidos, IDs inexistentes ou áreas totais inválidas.

Esses testes fornecem uma maneira automatizada de garantir que a API funcione conforme o esperado e ajuda a identificar problemas rapidamente durante o desenvolvimento.

 