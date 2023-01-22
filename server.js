const express = require("express");
const path = require("path");
const notesDb = require("./db/db.json");
//console.log("this is the notes.db",notesDb)
const app = express();
const PORT = 3001; 

app.use(express.static("public"));

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.get("/api/notes", (req, res) => {
  res.json(notesDb)
});

app.post("/api/notes", (req, res) => {
  
});

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


