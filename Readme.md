# Grain Agriculture Backend

Este é o backend da aplicação Grain Agriculture, uma plataforma para gerenciamento de dados agrícolas.

## Início Rápido

### Pré-requisitos

- Node.js e npm instalados
- Docker instalado
- Kubernetes (kubectl) instalado (opcional, para implantação no Kubernetes)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/RawdneyGoncalves/grain-agriculture-backend.git


## Instale as dependências:

cd grain-agriculture-backend
npm install


## Crie um contêiner PostgreSQL com uma senha aleatória:

docker run --name grain-agriculture-postgres -e POSTGRES_PASSWORD=$(openssl rand -base64 32 | tr -d '\n\r') -d -p 5432:5432 postgres:latest


## Crie um arquivo .env na raiz do projeto e adicione o seguinte:

DATABASE_URL=postgres://grain-agriculture:sua-senha-gerada@a-172.27.0.2:5432/grain-agriculture



### Substitua sua-senha-gerada pela senha gerada no passo anterior e a-host-do-seu-banco-de-dados pelo endereço do seu banco de dados.

# executando a aplicação 

npm start


## Construa a imagem Docker:

docker build -t grain-agriculture-backend .


## Execute o contêiner Docker:

docker run -p 3000:3000 -d grain-agriculture-backend


## Implante a aplicação no Kubernetes:

kubectl apply -f kubernetes/deployment.yaml


## Exponha o serviço:

kubectl expose deployment grain-agriculture-backend --type=LoadBalancer --port=80 --target-port=3000


# Testando 

## Para executar os testes, utilize o seguinte comando:

npm test
