const Todo = require('../models/todo');

module.exports.home = async function (req, res) {
  try {
    const todos = await Todo.find({}).sort({ due_date: 1 });
    return res.render('home', {
      todo_list: todos,
    });
  } catch (err) {
    console.log(`Error in fetching todos: ${err}`);
    return res.status(500).send('Internal Server Error');
  }
};
