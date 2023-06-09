const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileRoutes = require("./routes/fileUploadRoutes");

const port = process.env.PORT || 8080;
app.use(cors());
dotenv.config();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

app.use("/api", fileRoutes.routes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname + "/public")));

app.listen(port, () =>
  console.log(`server is listening on url http://localhost:${port}`)
);
