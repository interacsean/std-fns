'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bimap = require('./bimap/bimap');

Object.defineProperty(exports, 'bimap', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_bimap).default;
  }
});

var _fmap = require('./fmap/fmap');

Object.defineProperty(exports, 'fmap', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_fmap).default;
  }
});

var _lmap = require('./lmap/lmap');

Object.defineProperty(exports, 'lmap', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_lmap).default;
  }
});

var _map = require('./map/map');

Object.defineProperty(exports, 'map', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_map).default;
  }
});

var _tap = require('./tap/tap');

Object.defineProperty(exports, 'tap', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_tap).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }