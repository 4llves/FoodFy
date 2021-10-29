const express = require('express');
const routes = express.Router();
const multer = require('../app/middlewares/multer');

const RecipesController = require('../app/controllers/RecipesController');

const { onlyUsers, isCreator } = require('../app/middlewares/sessions');
const Validator = require('../app/validators/recipe');

// Recipes Admin //
routes.get('/', onlyUsers, RecipesController.index);
routes.get('/my-recipes', onlyUsers, RecipesController.userRecipes);
routes.get('/create', onlyUsers, RecipesController.create);
routes.get('/:id', onlyUsers, RecipesController.show);
routes.get('/:id/edit', onlyUsers, isCreator, RecipesController.edit);
routes.post('/', onlyUsers, multer.array('photos', 5), Validator.post, RecipesController.post);
routes.put('/', onlyUsers, multer.array('photos', 5), Validator.put, RecipesController.put);
routes.delete('/', onlyUsers, RecipesController.delete);

module.exports = routes;