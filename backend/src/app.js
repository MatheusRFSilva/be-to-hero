const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
module.exports = app;
/*
* Rota / Recurso
*/

/*
Metodos HTTP:
Get: Buscar um informacao do back-end
Post: Criar uma informacao no back-end
PUT: Alterar uma informacao no back-end
DELETE: Deletar uma informacao no back-end
*/


/*
Tipos de parametros
Query: Parametros nomeados na rota apos "?""(filtros, paginacao e etc)
Route Params: Parametros  utilizados para identificar recursos
Request Body : Corpo da requisicao , utilizado para criar ou alterar recursos
*/

/*
SQL : Mysql, SQLite, PostGree, Oracle sql, SQL server
NoSQL: MongoDB, CouchDB, etcnpm install knex
*/

//app.listen(3333);
