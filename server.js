var express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors');
var stuff = require('node-day-one');
var app = express();
var resources = stuff.resources;

var guestList = {


};

//middleware
app.use(function (req, res, next) {
  console.log(`GETTING A ${req.method} REQUEST AT ${req.url}`);
  next();
});

app.post('*', function (req, res, next) {
  if (req.headers['content-type'] !== 'application/json') {
    res.status(400).json('Expected content-type application/json');
  } else {
    next();
  }
});
app.use(bodyParser.json());
app.use(cors());

app.get('/resources', function (req, res, next) {

  console.log('hi');
  next();

}, function (req, res) {
  console.log('getting at slash root');
  res.json(resources);
});


app.get('/guest-list', function (req, res) {

  res.json(guestList);
});

app.post('/guest-list', function (req, res) {
  var guests = req.body;
  for (var key in guests) {
    guestList[key] = guests[key];
  }
  res.json(true);
});

app.put('/guest-list/:guestName', function (req, res) {
  var guestName = req.params.guestName;
  guestList[guestName] = req.body.attending;
  res.json(true);

});
/*app.post('/resources', function (req, res) {
  console.log(req.body);

})*/

app
  .listen(9001, function (e) {
    if (e) return console.error(e);
    console.log('now listening on ', 9001);
  });