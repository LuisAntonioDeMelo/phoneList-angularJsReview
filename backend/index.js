const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});
const contatos = [
  {
    nome: "Pedro",
    telefone: "99998888",
    cor: "blue",
    operadora: { nome: "Oi", codigo: 14, categoria: "Celular" },
    data: new Date(),
  },
  {
    nome: "Ana",
    telefone: "9999877",
    cor: "yellow",
    operadora: { nome: "Vivo", codigo: 15, categoria: "Celular" },
    data: new Date(),
  },
  {
    nome: "Maria",
    telefone: "999983123",
    cor: "red",
    operadora: { nome: "Tim", codigo: 41, categoria: "Celular" },
    data: new Date(),
  },
  {
    nome: "João",
    telefone: "99998812",
    cor: "orange",
    operadora: { nome: "Tim", codigo: 41, categoria: "Celular" },
    data: new Date(),
  },
];

const operadoras = [
  { nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 },
  { nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 },
  { nome: "Tim", codigo: 41, categoria: "Celular", preco: 1 },
  { nome: "GVT", codigo: 25, categoria: "Fixo", preco: 3 },
  { nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 4 },
];

app.get("/contatos", function (req, res) {
  res.send(contatos);
});

app.post("/contatos", function (req, res) {
  //console.log(req.url, req.method ,req.data, req.body)
  console.log(req.body);
  const { nome, telefone, operadora, data, serial } = req.body;

  //const nomeJaContem = contatos.find(n =>  n.nome === nome);

  contatos.push({
    nome,
    telefone,
    operadora,
    data,
    serial,
  });
  return res.send(contatos);
});

app.get("/operadoras", function (req, res) {
  res.send(operadoras);
});

console.log("Iniciando backend...");
app.listen(3000);
