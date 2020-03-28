const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
/**
 * Métodos HTTP - Isso é questão de semantica =>
 * 
 * GET:    Buscar/listar  uma informação do back-end
 * POST:   Criar          uma informação no back-end
 * PUT:    Alterar        uma informação no back-end
 * DELETE: Deletar        uma informação no back-end
 */
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


/**
 * Tipos de Parametro
 * 
 * Query Params: Parametros nomeados enviados na rota após o "?" (Filtro, paginação)
 * http://localhost:3333/users?page=2&nome=Murilo&Idade=32
 * 
 * Route Params: Parametros utilizados para identificar recursos
 * app.get('/users/:id', (request, response) =>{
 * http://localhost:3333/users/1
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * Insominia: POST : http://localhost:3333/users
 * JSON { "name": "Murilo Menegasso", "idade": 33}
 * la em cima chamar no app JSON
 * app.use(express.json());
 */




module.exports = routes;