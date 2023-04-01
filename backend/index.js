const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
const cors = require("cors");

mongoDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  req.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.use(cors());
app.use("/api", require("./routes/CreateUser.js"));
app.use("/api", require("./routes/DisplayData"));

app.listen(port, () => {
  console.log(`Port number is ${port}`);
});
