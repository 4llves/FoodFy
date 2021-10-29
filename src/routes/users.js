const express = require('express');
const routes = express.Router();

const SessionController = require('../app/controllers/SessionController');
const ProfileController = require('../app/controllers/ProfileController');
const UsersController = require('../app/controllers/UsersController');

const UserValidator = require('../app/validators/user');
const ProfileValidator = require('../app/validators/profile');
const SessionValidator = require('../app/validators/session');

const { onlyUsers, isAdmin, isLoggedRedirectToProfile } = require('../app/middlewares/sessions');

// Login/logout //
routes.get('/login', isLoggedRedirectToProfile, SessionController.loginForm);
routes.post('/login', SessionValidator.login, SessionController.login)
routes.post('/logout', SessionController.logout);

// Profile //
routes.get('/profile', onlyUsers, ProfileValidator.show, ProfileController.index);
routes.put('/profile', onlyUsers, ProfileValidator.update, ProfileController.update);

// Reset Password //
routes.get('/forgot-password', SessionController.forgotForm);
routes.get('/password-reset', SessionController.resetForm);
routes.post('/forgot-password', SessionValidator.forgot, SessionController.forgot);
routes.post('/password-reset', SessionValidator.reset, SessionController.reset);

// User register //
routes.get('/register', onlyUsers, isAdmin, UsersController.registerForm);
routes.post('/register', onlyUsers, isAdmin, UserValidator.post, UsersController.post);

// User management //
routes.get('/', onlyUsers, isAdmin, UsersController.list);
routes.get('/:id/edit', onlyUsers, isAdmin, UserValidator.edit, UsersController.edit);
routes.put('/', onlyUsers, isAdmin, UserValidator.update, UsersController.update);
routes.delete('/', onlyUsers, isAdmin, UserValidator.exclude, UsersController.delete);

module.exports = routes;