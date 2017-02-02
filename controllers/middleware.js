var exports = module.exports = {};

var skillz = require('../skillz.js');

exports.addHeaders = function(req, res, next) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  })
  next();
}

exports.generateId = function(req, res, next) {
  req.body.id = skillz.length + 1;
  next();
}

exports.verifyUser = (req, res, next) => {
  if (req.params.username === "paul" && req.params.pin == "1234") {
    next();
  } else {
    res.status(403).send({"Error":'No can do compadre'})
  }
}