
<h1 align="center">
  🍛#FoodFy - Desafio LauchBase (Rocketseat)
</h1>

<p></p>

<h1 align="center">
    <img alt="Home Page" src="https://github.com/4llves/FoodFy/blob/master/.github/homePage.gif" />
</h1>

<h4 align="center"> 
	Foodfy 🍛 Concluído 🚀
</h4>

## 💻 Sobre o projeto

Foodfy - Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro.

Projeto desenvolvido durante o **Bootcamp Launchbase** oferecido pela [Rocketseat](https://rocketseat.com.br/).

## 🚀 Como executar o projeto

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🧭 Rodando a aplicação

1. Clone este repositório

	```bash
	git clone https://github.com/4llves/FoodFy
	```

2. Acesse a pasta do projeto no seu *vscode*

	```bash
	cd foodfy
	```

3. Instale as dependências

	```bash
	npm install
	```

4. Configure o Banco de dados (*PostgreSQL*) executando os comandos presente no arquivo *database.sql*.

	```bash
	CREATE TABLE "" (
	    "id" SERIAL PRIMARY KEY,
	    "name" TEXT,
	    "number" int NOT NULL
	)
	```

5. Execute o arquivo *seed.js* para popular o banco de dados.

	```bash
	node seed.js
	```
	

6. Execute a aplicação 

	```bash
	npm start
	```

*A aplicação será aberta na porta:5001 - acesse http://localhost:5001*



#### 📌 Importante

- Vá para a pasta *src/config* e configure o arquivo *db.js* **colocando seu usuário e senha** de conexão com o *PostgreSQL*.

- A senha de todos os usúarios criados com a *seed.js* é **launchbase**

- Se executar o arquivo *seed.js*, tome cuidado ao excluir chefes ou receitas pois as imagens disponíveis na pasta *public/imagens* vão ser excluidas. Então, reponha as imagens excluídas com novas. Você encontrará imagens na pasta *public/assets*, copie a que desejar para a pasta *public/imagens* e **renomeie para o mesmo nome da imagem apagada**.

- Limpe o banco de dados antes de popular novamente com a *seed.js*, comandos para limpar no arquivo ***database.sql***

- Configure o mailtrap no arquivo *mailer.js*, **colocando suas credenciais**.

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
-   **[Bcryptjs](https://github.com/kelektiv/node.bcrypt.js/)**
-   **[Connect Pg Simple](https://github.com/voxpelli/node-connect-pg-simple)**
-   **[Express](https://expressjs.com/)**
-   **[Express Session](https://github.com/expressjs/session)**
-   **[Faker](https://www.npmjs.com/package/faker)**
-   **[Method Override](https://www.npmjs.com/package/method-override)**
-   **[Multer](https://www.npmjs.com/package/multer)**
-   **[Nodemailer](https://github.com/nodemailer/nodemailer)**
-   **[NodeJS](https://nodejs.org/en/)**
-   **[Node Postgres](https://github.com/brianc/node-postgres)**
-   **[Nunjucks](https://github.com/mozilla/nunjucks)**
-   **[JavaScript](https://www.javascript.com/)**
-   **[Nodemon](https://www.npmjs.com/package/nodemon)**
-   **[Npm Run All](https://www.npmjs.com/package/npm-run-all)**
