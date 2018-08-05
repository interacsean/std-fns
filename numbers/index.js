'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dec = require('./dec/dec');

Object.defineProperty(exports, 'dec', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_dec).default;
  }
});

var _inc = require('./inc/inc');

Object.defineProperty(exports, 'inc', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_inc).default;
  }
});

var _subtract = require('./subtract/subtract');

Object.defineProperty(exports, 'subtract', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_subtract).default;
  }
});

var _sum = require('./sum/sum');

Object.defineProperty(exports, 'sum', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_sum).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }