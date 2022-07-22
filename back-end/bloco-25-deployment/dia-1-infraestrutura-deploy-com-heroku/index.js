require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Está vivo!!!');
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {`Está na porta ${ PORT }`});

/* 
  comandos dos exercicios:
  keroku create deploy251
  git push heroku master

  heroku config:set TESTE='variavel de ambiente teste' --app deploy251 
  git config --app deploy251

  git remote rename heroku homolog
  heroku create --remote prod

  heroku config:set msg="deploy1: variáveis funcionam" --app deploy251
  git push homolog master

  heroku config:set msg="prod: variáveis funcionam" --app obscure-ridge-26200
  git push prod master
*/
