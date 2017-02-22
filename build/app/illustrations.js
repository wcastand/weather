'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rain = exports.sunny = undefined;

var _dom = require('@cycle/dom');

var _rain = require('../svgs/rain');

var _rain2 = _interopRequireDefault(_rain);

var _sunny = require('../svgs/sunny');

var _sunny2 = _interopRequireDefault(_sunny);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sunny = exports.sunny = function sunny() {
  return _sunny2.default;
};
var rain = exports.rain = function rain() {
  return _rain2.default;
};