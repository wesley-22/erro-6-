'use strict';

var utils = require('../utils/writer.js');
var DadosAdicionaisDoContrato = require('../service/DadosAdicionaisDoContratoService');

module.exports.v1CboDELETE = function v1CboDELETE (req, res, next, cbo_id) {
  DadosAdicionaisDoContrato.v1CboDELETE(cbo_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1CboGET = function v1CboGET (req, res, next, cbo_id) {
  DadosAdicionaisDoContrato.v1CboGET(cbo_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1CboPOST = function v1CboPOST (req, res, next) {
  DadosAdicionaisDoContrato.v1CboPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1FuncaoDELETE = function v1FuncaoDELETE (req, res, next, func_id) {
  DadosAdicionaisDoContrato.v1FuncaoDELETE(func_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1FuncaoGET = function v1FuncaoGET (req, res, next, cdempresa) {
  DadosAdicionaisDoContrato.v1FuncaoGET(cdempresa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1FuncaoPATCH = function v1FuncaoPATCH (req, res, next, func_nome, cbo_id) {
  DadosAdicionaisDoContrato.v1FuncaoPATCH(func_nome, cbo_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1FuncaoPOST = function v1FuncaoPOST (req, res, next, func_nome, cbo_id) {
  DadosAdicionaisDoContrato.v1FuncaoPOST(func_nome, cbo_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1HorariosDELETE = function v1HorariosDELETE (req, res, next, hora_id) {
  DadosAdicionaisDoContrato.v1HorariosDELETE(hora_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1HorariosGET = function v1HorariosGET (req, res, next, cdempresa) {
  DadosAdicionaisDoContrato.v1HorariosGET(cdempresa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1HorariosPATCH = function v1HorariosPATCH (req, res, next) {
  DadosAdicionaisDoContrato.v1HorariosPATCH()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1HorariosPOST = function v1HorariosPOST (req, res, next) {
  DadosAdicionaisDoContrato.v1HorariosPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
