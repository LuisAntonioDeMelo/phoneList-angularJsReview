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
    id: 1,
    nome: "Pedro",
    telefone: "99998888",
    cor: "blue",
    operadora: { nome: "Oi", codigo: 14, categoria: "Celular", preco: 2 },
    data: new Date(),
  },
  {
    id: 2,
    nome: "Ana",
    telefone: "9999877",
    cor: "yellow",
    operadora: { nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 },
    data: new Date(),
  },
  {
    id: 3,
    nome: "Maria",
    telefone: "999983123",
    cor: "red",
    operadora: { nome: "Tim", codigo: 41, categoria: "Celular", preco: 1 },
    data: new Date(),
  },
  {
    id: 4,
    nome: "João",
    telefone: "99998812",
    cor: "orange",
    operadora: { nome: "Tim", codigo: 41, categoria: "Celular", preco: 1 },
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

app.get("/contatos/:id", function (req, res) {
  const { id } = req.params;
  //const contatoPorId = contatos[id - 1];
  const contatoPorId = contatos.find((data) => data.id === parseInt(id));
  if (!contatoPorId) {
    return res.status(404).json({ error: " not found " });
  }
  return res.send(contatoPorId);
});

app.post("/contatos", function (req, res) {
  //console.log(req.url, req.method ,req.data, req.body)
  console.log(req.body);
  const { nome, telefone, operadora, data, serial } = req.body;

  //const nomeJaContem = contatos.find(n =>  n.nome === nome);

  contatos.push({
    id: contatos.length + 1,
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
