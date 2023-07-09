const express =  require('express');

const router  = express.Router();

const createTodo = require('../controllers/create_controller');

console.log("Create Todo router is loaded");

router.post('/', createTodo.addTodo);

module.exports = router;
