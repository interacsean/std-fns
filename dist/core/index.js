'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _partial = require('./partial/partial');

Object.defineProperty(exports, 'partial', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_partial).default;
  }
});

var _partialRight = require('./partialRight/partialRight');

Object.defineProperty(exports, 'partialRight', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_partialRight).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }