var middleware = require('./middleware.js')
var user = require('../user.js')
var skillz = require('../skillz.js')
var secrets = require('../secrets.js')

var exports = module.exports = {};

exports.getName = function(req, res, next) {
  res.json({
    "name": user.name
  });
  next();
}

exports.getLocation = function(req, res, next) {
  res.json({
    "location": user.location
  });
}

exports.getOccupations = function(req, res, next) {
  let occupations = user.occupations;

  if (req.query.order && req.query.order === "asc") {
    occupations.sort()
    res.json({
      "occupations": occupations
    });
  } else if (req.query.order && req.query.order === "desc") {
    occupations.sort().reverse()
    res.json({
      "occupations": occupations
    });
  } else {
    res.json({
      "occupations": user.occupations
    });
  }
}

exports.getLatestOccupation = (req, res, next) => {
  res.json({
    "latestOccupation": user.occupations.slice(-1)
  });
}

exports.getHobbies = (req, res, next) => {
  res.json({
    "hobbies": user.hobbies
  });
}

exports.getHobbiesByType = (req, res, next) => {
  hobbies = Array.from(user.hobbies)
  filteredHobbies = hobbies.filter(function(val, index, arr) {
    return val.type === req.params.type;
  });
  res.json({
    "hobbies": filteredHobbies
  });
}

exports.getFamily = (req, res, next) => {
  res.json({
    "family": user.family
  })
}

exports.getFamilyByGender = (req, res, next) => {
  filteredFamily = Array.from(user.family).filter(function(val, index, arr) {
    return val.gender === req.params.gender;
  });
  res.json(filteredFamily)
}

exports.getRestaurants = (req, res, next) => {
  res.json(user.restaurants)
}

exports.getRestaurantsByName = (req, res, next) => {
  filteredRestaurants = Array.from(user.restaurants).filter(function(val, index, arr) {
    return val.name.toLowerCase().replace(/[^a-z0-9]+/g, '') === req.params.name.toLowerCase().replace(/[^a-z0-9]+/g, '');
  })
  res.json({
    "restaurants": filteredRestaurants
  })
}

exports.getSkillz = (req, res, next) => {
  if (req.query.experience) {
    let filteredSkillz = skillz.filter(function(elem, index, arr) {
      return elem.experience === req.query.experience;;
    })
    res.json(filteredSkillz);
  } else {
    res.json(skillz)
  }
}

exports.getSecrets = (req, res, next) => {
  res.json(secrets);
}

///***//// PUT Methods

exports.putName = (req, res, next) => {
  user.name = req.body.name;
  res.status(200).send('okay');
}

exports.putLocation = (req, res, next) => {
  user.location = req.body.location;
  res.status(200).send('okay');
}

////****///// POST Methods

exports.postHobbies = (req, res, next) => {
  user.hobbies.push(req.body);
  res.status(200).send('okay');
}

exports.postOccupations = (req, res, next) => {
  user.occupations.push(req.body.occupation);
  res.status(200).send('okay');
}

exports.postFamily = (req, res, next) => {
  user.family.push(req.body);
  res.status(200).send('okay');
}

exports.postRestaurants = (req, res, next) => {
  user.restaurants.push(req.body);
  res.status(200).send('okay')
}

exports.postSkillz = (req, res, next) => {
  skillz.push(req.body);
  res.status(200).send('okay');
}




