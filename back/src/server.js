const express = require("express");
const indexRouter = require("./routes/moviesRoutes")
const morgan = require("morgan");
const cors = require("cors");


const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(indexRouter);

module.exports = app;