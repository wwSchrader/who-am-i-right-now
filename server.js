// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  let requestHeader = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
  let ipAddress = requestHeader.split(',::ffff:')[0];
  
  let ua = request.headers['user-agent'].split(';')[0];
  let language = request.headers['accept-language'].split(',')[0];
  console.log(request.headers);
  
  let responseJSON = {
    ipaddress: ipAddress,
    language: language,
    software: ua
  }
  
  response.send(responseJSON);
  });





// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
