const express =  require('express');


const router = express.Router();

const homeController = require('../controllers/home_controller');

console.log("Home router loaded");

router.get('/', homeController.home);

router.use('/create-todo', require('./createTodo'));
router.use('/delete-todo', require('./deleteTodo'));

module.exports = router;