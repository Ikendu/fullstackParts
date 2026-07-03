const http = require("http");
// import http from "http";
const express = require("express");
const app = express();

// Middleware to parse JSON request bodies, for making POST requests easier to handle
app.use(express.json());

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true,
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
  {
    id: "4",
    content: "The Server in the backend is a Node.js application",
    important: true,
  },
];

app.get("/", (req, res) => {
  console.log(req);
  res.send("<h1>Hello, World!</h1>");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = notes.find((note) => note.id === id);
  //   res.json(note);
  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});

app.post("/api/notes", (req, res) => {
  const post = req.body;
  if (!post.content) {
    return res.status(400).json({ error: "Content missing" });
  }
  const id = notes.length + 1;
  post.id = id.toString();
  notes = [...notes, post];
  console.log("New note added:", post);
  res.status(201).json(post);
});

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const otherNotes = notes.filter((note) => note.id !== id);
  if (otherNotes.length === notes.length) {
    res.status(404).end();
  } else {
    notes = otherNotes;
    res.status(204).end();
  }
});

// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(notes));
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
