const dishRouter = require("./routes/dishRouter");
const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const hostname = "localhost";
const port = 3000;

const app = express();

app.listen(port, () => {
  console.log("Listening on port 3000");
});

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/dishes", dishRouter);
