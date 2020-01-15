const express = require('express'); // importing a CommonJS module

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();


server.use(express.json());
server.use(echo);

server.use(gateKeeper);

server.use('/api/hubs',hubsRouter);

server.get('/', (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

function echo(req, res, next) {
  const body = req.body;
  console.log(body);
  next();
}

function gateKeeper(req, res, next){

  if (req.headers.password === 'mellon') 
    next();
  else  
    res.status(401).json({you: 'cannot pass!'})

}
module.exports = server;
