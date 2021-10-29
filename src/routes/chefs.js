const express = require('express');
const routes = express.Router();
const multer = require('../app/middlewares/multer');

const ChefsController = require('../app/controllers/ChefsController');

const { onlyUsers, isAdmin } = require('../app/middlewares/sessions');
const Validator = require('../app/validators/chef');

// Chefs Admin //
routes.get('/', onlyUsers, ChefsController.index);
routes.get('/create', onlyUsers, isAdmin, ChefsController.create);
routes.get('/:id', onlyUsers, ChefsController.show);
routes.get('/:id/edit', isAdmin, onlyUsers, ChefsController.edit);
routes.post('/', onlyUsers, isAdmin, multer.array('photos', 1), Validator.post, ChefsController.post);
routes.put('/', onlyUsers, isAdmin, multer.array('photos', 1), Validator.put, ChefsController.put);
routes.delete('/', onlyUsers, isAdmin, ChefsController.delete);

module.exports = routes;