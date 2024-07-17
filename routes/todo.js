const express = require("express");
const {
  addTodo,
  getTodo,
  deleteTodo,
  updateTodo,
} = require("../controller/todoController");

const router = express.Router();

router.post("/add", addTodo);
router.get("/", getTodo);
router.delete("/delete/:id", deleteTodo);
router.patch("/update/:id", updateTodo);

module.exports = router;
