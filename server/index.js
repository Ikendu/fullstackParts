const http = require("http");
// import http from "http";
const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();

const Phonebook = require("./models/phonebook");

app.use(cors());

// Middleware to parse JSON request bodies, for making POST requests easier to handle
app.use(express.json());
app.use(express.static("dist"));

const password = process?.argv[2];

// Use public DNS servers for SRV record resolution if the local resolver is refusing the query.

app.get("/", (req, res) => {
  console.log(req);
  res.send("<h1>Hello, World! We are deployed</h1>");
});

app.get("/api/phonebook", (req, res) => {
  // res.json(phonebook);
  Phonebook.find({}).then((result) => {
    console.log("Retrieved contacts from MongoDB:", result);
    res.json(result);
  });
});

app.get("/info", (req, res) => {
  const currentDate = new Date();
  const info = `<p>Phonebook has info for ${phonebook.length} people</p>
    <p>${currentDate}</p>`;
  res.send(info);
});

app.get("/api/phonebook/:id", (req, res) => {
  Phonebook.findById(req.params.id).then((contact) => res.json(contact));
});

// app.post("/api/phonebook", (req, res) => {
//   const contact = req.body;
//   if (!contact.name || !contact.number) {
//     return res.status(400).json({ error: "Name and number are required" });
//   }
//   const id = phonebook.length + 1;
//   contact.id = id.toString();
//   phonebook = [...phonebook, contact];
//   console.log("New contact added:", contact);
//   res.status(201).json(contact);
// });

app.post("/api/phonebook", (req, res) => {
  const body = req.body;
  console.log("BODY", body);
  if (!body.name || !body.number) {
    return res.status(400).json({ error: "Name and number are required" });
  }
  const contact = new Phonebook({
    name: body.name,
    number: body.number,
  });
  contact.save().then((result) => {
    res.status(201).json(result);
  });
});

app.post("/api/phonebook/clean", async (req, res) => {
  try {
    const result = await removeEmptyEntries();
    res.json({ ok: true, deletedCount: result.deletedCount });
  } catch (err) {
    console.error(
      "Failed to clean entries:",
      err && err.message ? err.message : err,
    );
    res.status(500).json({ ok: false, error: "Failed to clean entries" });
  }
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

async function removeEmptyEntries() {
  return Phonebook.deleteMany({
    $or: [{ name: { $in: [null, ""] } }, { number: { $in: [null, ""] } }],
  });
}

// const phonebook = new Phonebook({ name, number });
