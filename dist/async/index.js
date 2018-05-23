'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bimap = require('./bimap/bimap');

var _bimap2 = _interopRequireDefault(_bimap);

var _map = require('./map/map');

var _map2 = _interopRequireDefault(_map);

var _tap = require('./tap/tap');

var _tap2 = _interopRequireDefault(_tap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  bimap: _bimap2.default,
  map: _map2.default,
  tap: _tap2.default
};