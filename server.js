const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
var PORT = process.env.PORT || 3000

// const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "budget_db";
const collections = ["budget"];

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/budget_db',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  




// routes
app.use(require("./routes/api.js"));

// Listen on port 3000
app.listen(PORT, () => {
    console.log(` http://localhost:3000`,);
  });
