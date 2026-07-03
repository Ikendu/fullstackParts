const http = require("http");
// import http from "http";
const express = require("express");
const app = express();

// Middleware to parse JSON request bodies, for making POST requests easier to handle
app.use(express.json());

let phonebook = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/", (req, res) => {
  console.log(req);
  res.send("<h1>Hello, World!</h1>");
});

app.get("/api/phonebook", (req, res) => {
  res.json(phonebook);
});

app.get("/info", (req, res) => {
    const currentDate = new Date();
    const info = `<p>Phonebook has info for ${phonebook.length} people</p>
    <p>${currentDate}</p>`;
    res.send(info);
})

app.get("/api/phonebook/:id", (req, res) => {
  const id = req.params.id;
  const contact = phonebook.find((contact) => contact.id === id);
  //   res.json(note);
  if (contact) {
    res.json(contact);
  } else {
    res.status(404).end();
  }
});

app.post("/api/phonebook", (req, res) => {
  const contact = req.body;
  if (!contact.name || !contact.number) {
    return res.status(400).json({ error: "Name and number are required" });
  }
  const id = phonebook.length + 1;
  contact.id = id.toString();
  phonebook = [...phonebook, contact];
  console.log("New contact added:", contact);
  res.status(201).json(contact);
});

app.delete("/api/phonebook/:id", (req, res) => {
  const id = req.params.id;
  const otherContacts = phonebook.filter((contact) => contact.id !== id);
  if (otherContacts.length === phonebook.length) {
    res.status(404).end();
  } else {
    phonebook = otherContacts;
    res.status(204).end();
  }
});

// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(phonebook));
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
