const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const _ = require('lodash');
const lodashId = require('lodash-id');

// Добавляем middleware для обработки запросов, чтобы использовать lodash-id
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    // Если свойство "value" есть в запросе, то используем его как идентификатор
    if (req.body.hasOwnProperty('value')) {
      req.body = _.set(req.body, 'id', req.body.value);
    }
  }
  // Запускаем следующую middleware
  next();
});

// Используем router с lodash-id
router._.mixin(lodashId);
router.db._.id = 'value';

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
