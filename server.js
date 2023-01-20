const express = require("express");
const path = require("path");


const app = express();
const PORT = 3001; 

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

/* 
app.get("/contact", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/pages/feedback.html"))
);
*/

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


