const todoModel = require("../model/todo");

exports.addTodo = async (req, res) => {
  try {
    const { content } = req.body;
    const newTodo = await todoModel.create({ content });

    res.status(201).json(newTodo);
  } catch (error) {
    console.log("Failed to add in the database due to error ", error.message);
    res
      .status(500)
      .json({ message: "Failed to add to the database", error: error.message });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const getAllTodo = await todoModel.find();
    res.status(200).json(getAllTodo);
  } catch (error) {
    console.log("Failed to get from the database due to error ", error.message);
    res
      .status(500)
      .json({
        message: "Failed to get from the database",
        error: error.message,
      });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const getTodo = await todoModel.findById(id);
    if (!getTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    await getTodo.deleteOne();
    res
      .status(200)
      .json({ status: "success", message: "Todo deleted successfully" });
  } catch (error) {
    console.log(
      "Failed to delete from the database due to error ",
      error.message
    );
    res
      .status(500)
      .json({
        message: "Failed to delete from the database",
        error: error.message,
      });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { content } = req.body;
    const getTodo = await todoModel.findById(id);
    if (!getTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    getTodo.content = content;
    const updatedTodo = await getTodo.save();
    res.status(200).json({ status: "success", updatedTodo });
  } catch (error) {
    console.log(
      "Failed to update in the database due to error ",
      error.message
    );
    res
      .status(500)
      .json({
        message: "Failed to update in the database",
        error: error.message,
      });
  }
};
