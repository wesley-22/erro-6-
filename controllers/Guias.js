'use strict';

var utils = require('../utils/writer.js');
var Guias = require('../service/GuiasService');

module.exports.getGuias = function getGuias (req, res, next, mes, ano) {
  Guias.getGuias(mes, ano)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postGuia = function postGuia (req, res, next, name, tipoGuia, guia) {
  Guias.postGuia(name, tipoGuia, guia)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1GuiasListaGET = function v1GuiasListaGET (req, res, next, mes, ano) {
  Guias.v1GuiasListaGET(mes, ano)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
