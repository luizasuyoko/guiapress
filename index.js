const express = require("express"); //importa biblioteca express
const app = express(); //define express cmo app
const connection = require ("./database/database"); //importa o bando de dados
const bodyParser = require("body-parser"); //importa o body-parser (para trabalhar com formularios)

//view engine - importa o ejs para interpretar codigos html
app.set("view engine", "ejs");

//static
app.use(express.static('public')); //define a pasta public para arquivos estaticos (css, img, js)

//bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

connection //faz conexao com banco de dados
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso");
    }).catch((error) => {
        console.log(error)
    })

app.get("/", (req, res) => {
    res.send("Página Funcionando"); //exibe a mssg na pagina web
})

app.listen(4000, () => {
    console.log("O servidor esta rodando") //inicia o servidor na porta 4000
})