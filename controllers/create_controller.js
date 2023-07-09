const Todo = require('../models/todo');


module.exports.addTodo = async function (req, res) {
  try {
    // Check if required fields are present in the request body
    if (!req.body.due_date || !req.body.category || !req.body.description) {
      return res.status(400).send('Required fields are missing.');
    }

    const newTodo = await Todo.create(req.body);
    console.log('******', newTodo);
    return res.redirect('back');
  } catch (err) {
    console.log(`Error in creating a Todo: ${err}`);
    return res.status(500).send('Internal Server Error');
  }
};
