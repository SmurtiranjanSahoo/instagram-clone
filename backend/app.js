require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// My Routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const storyRoutes = require("./routes/story");

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
const allowedOrigins = [
  "http://localhost:3000",
  "https://instagram-tr.vercel.app",
];

const corsOptions = {
  origin: "https://instagram-tr.vercel.app",
  credentials: true,
  optionsSucessStatus: 204,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());
// My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", postRoutes);
app.use("/api", storyRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Its Working",
  });
});

//Port
const Port = process.env.PORT || 7000;

app.listen(Port, () => {
  console.log(`Server Running on PORT ${Port}`);
});
