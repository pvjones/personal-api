var express = require('express');
var bodyParser = require('body-parser');

var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();
app.use(bodyParser.json());
app.use(middleware.addHeaders);
//app.use() method just applies a function to every request made before passing it on to the next function or eventually sending a response.
var port = 3000;

app.get('/api/name', mainCtrl.getName);

app.get('/api/location', mainCtrl.getLocation);

app.get('/api/occupations', mainCtrl.getOccupations);

app.get('/api/latest', mainCtrl.getLatestOccupation);

app.get('/api/hobbies', mainCtrl.getHobbies);

app.get('/api/hobbies/:type', mainCtrl.getHobbiesByType);

app.get('/api/family', mainCtrl.getFamily);

app.get('/api/family/:gender', mainCtrl.getFamilyByGender);

app.get('/api/restaurants', mainCtrl.getRestaurants);

app.get('/api/restaurants/:name', mainCtrl.getRestaurantsByName);

app.get('/api/skillz', mainCtrl.getSkillz);

app.get('/api/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);

app.put('/api/name', mainCtrl.putName);

app.put('/api/location', mainCtrl.putLocation);

app.post('/api/hobbies', mainCtrl.postHobbies);

app.post('/api/occupations', mainCtrl.postOccupations);

app.post('/api/family', mainCtrl.postFamily);

app.post('/api/restaurants', mainCtrl.postRestaurants);

app.post('/api/skillz', middleware.generateId, mainCtrl.postSkillz);



app.listen(port, function() {
  console.log(`listening on port ${port}`);
})