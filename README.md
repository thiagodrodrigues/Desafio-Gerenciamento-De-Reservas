<h1 align=center> Projeto nScreen - Vaga DEV Back-End Jr. <br> Thiago Daniel Alvim Rodrigues</hi> <br>

<p align="center">
  <img src="./docs/logo.jpeg" width="50%">
</p>

---


## 💻 Sobre o projeto

<br>

Desenvolver uma API RESTful utilizando NestJs para gerenciar reservas. Cada reserva deve conter informações sobre a data da reserva, detalhes sobre as pessoas envolvidas na reserva (nome, data de nascimento, CPF), bem como informações adicionais

## Requisitos

- Criar Endpoints para:
  -> Criar uma nova reserva
  -> Listar todas as reservas

- Cada reserva deve conter as seguintes informações:
  -> Data da reserva.
  -> Detalhes sobre as pessoas envolvidas na reserva:
    * Nome
    * Data de Nascimento
    * CPF
  -> Informações adicionais sobre a reserva

- Utilize uma estrutura de dados adequada para armazenar as reservas (pode ser um banco de dados como SQLite com TypeORM, MongoDB, etc.)

### Sugestões de EndPoints

- POST `/reservas`
  -> Cria uma nova reserva. Corpo da requisição JSON com a data da reserva, detalhes sobre as pessoas envolvidas e informações adicionais.

- GET `/reservas`
  -> Lista todas as reservas.

### Ferramentas

- NodeJS com NestJs
- MySQL
- TypeScript
- Sequelize
- Postman (Documentação)


## :wrench: Como usar a API:

1. Clonar o repositório na máquina local utilizando o comando `git clone git@github.com:thiagodrodrigues/Desafio-Gerenciamento-De-Reservas.git`
1. Após clonar o repositório, executar o comando `npm install` ou `yarn install`.
2. Acessar o arquivo `.env example`, renomear o arquivo para `.env` e alterar a conexão do banco de dados com as seguintes instruções:
- DB_HOST="local irá rodar o servidor; exemplo 'localhost' "
- DB_PORT="porta utilizada pelo mysql; por padrão o mysql utiliza a porta 3306"
- DB_USERNAME="nome de usuario no mysql"
- DB_PASSWORD="senha de usuario no mysql"
- DB_DATABASE="Nome do banco de dados: reservationService"

4. Executar o comando `npm run create:db` que irá gerar o banco de dados e popular com exemplos.
5. Executar o comando `npm run start:dev` para iniciar sua conexão com o servidor
6. Caso tudo tenha dado certo, você está pronto para testar a API, caso não, revise o passo-a-passo



## :floppy_disk: Banco de dados:

O Banco de Dados foi criado no MySQL seguindo padrão de tabelas e colunas exposto a seguir:

<p align="center">
<img src="./docs/bd.jpeg" alt="Banco de Dados">

</br>


---

## :memo: Documentação da API

A Documentação da API, rotas e exemplos foram feitos através do Postman e publicado no link: <br>

<h1>
<p align="center"> <a href="https://documenter.getpostman.com/view/24484577/2s8Z72VrRr"><img src="https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png" alt="postman" height="30" width="30" alt="github logo"> Documentação API - Postman <img src="https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png" alt="postman" height="30" width="30" alt="postman logo"></a> </p>
</h1>
</br>


<h2> 👨‍💻 Contribuidor </h2><br>

<h3>
<table align=center>
  <tr>

   <td align="center"> <img src="https://avatars.githubusercontent.com/u/109247611?v=4"  width=175/></br> Thiago Rodrigues </br><a href="https://github.com/thiagodrodrigues"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" height="30" width="30" alt="github-logo" /> </a> <a href="https://www.linkedin.com/in/thiago-daniel-alvim-rodrigues-5229a8124/"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" height="30" width="30" alt="linkedin-logo" /> </a>
   </td>
   
  </tr>
</table> </h3>


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
<br><br>

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" width="52" alt="typescript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" height="40" width="52" alt="nodejs logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" height="40" width="52" alt="nestjs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" height="40" width="52" alt="mysql logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-plain-wordmark.svg" height="40" width="52" alt="sequelize logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" height="40" width="52" alt="postman logo"  />
  <img src="https://www.payoda.com/wp-content/uploads/2021/05/1_mbP4Bjrs8Hshx7IgjsUNSg.jpeg" height="40" width="52" alt="API logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" width="52" alt="npm logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="52" alt="github logo"  />
</div>
