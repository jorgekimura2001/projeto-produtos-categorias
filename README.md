# Produtos e Categorias

## Objetivo
Aplicação com o objetivo de gerenciar produtos e suas categorias.

## Tecnologias
<ul>
  <li>NodeJS</li>
  <li>Express</li>
  <li>JavaScript</li>
  <li>PostgreSQL</li>
  <li>Docker</li>
</ul>

## Configurando as variavéis de ambiente

Inicialmente clone o arquivo .env.example e coloque o nome de .env, após isso coloque suas informações para poder utilizar a aplicação.

## Docker

Essa aplicação já está com o Docker configurado, basta preencher as variáveis de ambiente no .env.

Basta buildar e subir nossos containers usando o comando padrão:

```
docker-compose up --build
```
ou
```
docker compose up --build
```

O comando pode variar com a versão do docker compose instalada em sua máquina

ATENÇÃO: a porta utilizada para rodar nosso docker é a 5433. Caso tenha algum problema com essa porta, basta alterá-la no docker-compose.yml.

## Rodando a aplicação

Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

````
yarn install
````


**Atenção:** é necessário utilizar o `yarn` pois esse projeto foi iniciado com esse gerenciador de pacotes.

Para verificar se já possui o gerenciador yarn instalado utilize o seguinte comando:

````
yarn --version
````

Caso não possua o yarn instalado, utilize o comando abaixo para instalar globalmente na sua máquina:

````
npm install --global yarn
````

Após instalado as dependências rode o seguinte comando no terminal:

````
yarn dev
````

