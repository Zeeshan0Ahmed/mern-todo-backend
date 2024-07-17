const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const router = require("./routes/todo");
const app = express();

app.use(cors());
// {
//   origin: "http://localhost:5174",
//   methods: ["POST", "GET", "PATCH", "DELETE"],
//   credentials: true,
// }
app.use(express.json());

app.use("/api/v1/todo", router);
app.get("/test", (req, res) => {
  res.send("Server is working");
});
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connection successfull");
  } catch (error) {
    console.log("Failed to connect database", error);
  }
};
connectDB();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});
