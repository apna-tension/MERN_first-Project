const express = require('express');
const adminControllers = require('../controllers/admin-controller');
const router = express.Router();

router.route("/users").get(adminControllers.getAllUsers);
router.route("/contacts").get(adminControllers.getAllContacts);


module.exports = router;