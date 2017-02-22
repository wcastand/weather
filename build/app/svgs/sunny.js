'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = require('@cycle/dom');

exports.default = (0, _dom.h)('svg#sunny', {
  'attrs': {
    'version': '1.1',
    'x': '0px',
    'y': '0px',
    'viewBox': '0 0 128 128',
    'space': 'preserve'
  },
  'style': { 'enable-background': 'new 0 0 128 128' }
}, [(0, _dom.h)('radialGradient#XMLID_21_', {
  'attrs': {
    'cx': '128',
    'cy': '6.357823e-07',
    'r': '128',
    'gradientUnits': 'userSpaceOnUse'
  }
}, [(0, _dom.h)('stop', {
  'attrs': { 'offset': '0' },
  'style': { 'stop-color': '#F0C200' }
}), (0, _dom.h)('stop', {
  'attrs': { 'offset': '0.1895' },
  'style': { 'stop-color': '#F3C70F' }
}), (0, _dom.h)('stop', {
  'attrs': { 'offset': '0.5512' },
  'style': { 'stop-color': '#FCD535' }
}), (0, _dom.h)('stop', {
  'attrs': { 'offset': '0.6832' },
  'style': { 'stop-color': '#FFDB45' }
}), (0, _dom.h)('stop', {
  'attrs': { 'offset': '1' },
  'style': { 'stop-color': '#DEC962' }
})]), (0, _dom.h)('rect', {
  'attrs': {
    'x': '0',
    'y': '-128',
    'width': '256',
    'height': '256'
  },
  style: { fill: 'url(#XMLID_21_)' }
})]);