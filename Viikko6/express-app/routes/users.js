var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.use(function (request, response, next){
  console.log("Olen middleware 1");
  next();
});

router.get('/toka', function(request,response){
  response.send("Toka methodi");
  console.log("Toka methodi");
});

router.get('/kolmas/:nimi', function(request,response){
  response.send("Olen " + request.params.nimi);
  console.log(request.params.nimi);
});

router.get('/neljas/:enimi/:snimi', function(request, response){
  response.send("Olen " + request.params.enimi + " " + request.params.snimi);
});

router.post('/', function(request, response){
  response.send(request.headers);
  console.log("post methodi");
});

module.exports = router;
