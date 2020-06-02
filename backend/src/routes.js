const { Router } = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const OngValidator = require('./middlewares/Ongs');
const IncidentValidator = require('./middlewares/Incidents');
const ProfileValidator = require('./middlewares/Profile');
const SessionValidator = require('./middlewares/Session');

const routes = Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngValidator.create, OngController.create)

routes.post('/incidents', IncidentValidator.create, IncidentController.create)
routes.get('/incidents', IncidentValidator.index, IncidentController.index)
routes.delete('/incidents/:id', IncidentValidator.delete, IncidentController.delete)

routes.get('/profile', ProfileValidator.index, ProfileController.index)

routes.post('/sessions', SessionValidator.create, SessionController.create)

module.exports = routes;