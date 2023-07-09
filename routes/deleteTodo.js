const express = require('express');

const router = express.Router();

const deleteTodo = require('../controllers/delete_controller');

console.log("Delete router is Loaded");

router.get('/', deleteTodo.removeTodo);

module.exports = router;