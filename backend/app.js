require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });
// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// My Routes

//Port
const Port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hello my instagram backend");
});

app.listen(Port, () => {
  console.log(`Server Running on PORT ${Port}`);
});
