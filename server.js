const express = require("express");
const morgan = require("morgan");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`);
});
