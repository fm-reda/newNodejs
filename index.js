require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/api");

//connect mongodb
mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

//status connection db
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Database"));

//use middleware for using json
app.use(express.json());

//link router
app.use("/api", router);

//set up server
app.listen(4000, () => {
  console.log("Start hacking http://localhost:4000");
});
