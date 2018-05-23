'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _partial = require('./partial/partial');

var _partial2 = _interopRequireDefault(_partial);

var _partialRight = require('./partialRight/partialRight');

var _partialRight2 = _interopRequireDefault(_partialRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  partial: _partial2.default,
  partialRight: _partialRight2.default
};