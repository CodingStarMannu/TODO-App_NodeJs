const Todo = require('../models/todo');

module.exports.removeTodo = async function (req, res) {
  try {
    const id = req.query.id;
    await Todo.findByIdAndDelete(id);
    return res.redirect('back');
  } catch (err) {
    console.log('Error occurred in deleting:', err);
    return res.status(500).send('Internal Server Error');
  }
};
