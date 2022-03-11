const express = require("express");
const morgan = require("morgan");
require("dotenv").config(); // configure dotenv
const {dbConnect} = require("./config/mongoConfig")
const todoRoutes = require("./routes/todoRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/todos", todoRoutes);
app.use("/api/auth", authRoutes);

app.use("/", (req, res) => res.status(200).json({msg: "API is up!"}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`);
  dbConnect();
});
