'use strict';

var utils = require('../utils/writer.js');
var StatusDoServidor = require('../service/StatusDoServidorService');

module.exports.v1StatusGET = function v1StatusGET (req, res, next) {
  StatusDoServidor.v1StatusGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
