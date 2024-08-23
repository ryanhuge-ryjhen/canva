const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: "http://localhost:8000",
      credentials: true,
    })
  );
} else {
  app.use(
    cors({
      credentials: true,
    })
  );
}

app.get("/", (req, res) => {
  res.send("welcome to my homepage");
});

const PORT = process.env.PORT;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(PORT, () =>
      console.log(`Server is listening to port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
start();
