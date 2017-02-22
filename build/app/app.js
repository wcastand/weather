'use strict';

var _xstreamRun = require('@cycle/xstream-run');

var _dom = require('@cycle/dom');

var _http = require('@cycle/http');

var _xstream = require('xstream');

var _xstream2 = _interopRequireDefault(_xstream);

var _illustrations = require('./illustrations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = 'http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=3fbfd12c63de47c48ecd35ef23b4b656&units=metric';
// fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=3fbfd12c63de47c48ecd35ef23b4b656&units=metric')
// .then(response => response.json())
// .then(parseData)
// .catch(err => console.error(err))

// function parseData(data) {
//   console.log(data)
// }

function main(_ref) {
  var DOM = _ref.DOM;
  var HTTP = _ref.HTTP;

  var actions$ = DOM.select('.refresh').events('click').startWith(null).map(function (ev) {
    return { url: url, category: 'refresh' };
  });

  var vtree$ = HTTP.select('refresh').flatten().map(function (res) {
    return res.body;
  }).map(function (data) {
    var svg = void 0;
    var id = data.weather[0].id;
    switch (id) {
      // Thunderstorm
      case 200:
      case 201:
      case 202:
      case 210:
      case 211:
      case 221:
      case 230:
      case 231:
      case 232:
        svg = (0, _illustrations.rain)();
        break;
      //Drizzle
      case 300:
      case 301:
      case 302:
      case 310:
      case 311:
      case 312:
      case 313:
      case 314:
      case 321:
        svg = (0, _illustrations.rain)();
        break;
      // Rain
      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
      case 511:
      case 520:
      case 521:
      case 522:
      case 531:
        svg = (0, _illustrations.rain)();
        break;
      // Snow
      case 600:
      case 601:
      case 602:
      case 611:
      case 612:
      case 615:
      case 616:
      case 620:
      case 621:
      case 622:
        svg = (0, _illustrations.rain)();
        break;
      // Clear
      case 800:
        svg = (0, _illustrations.sunny)();
        break;
      // Clouds
      case 801:
      case 802:
      case 803:
      case 804:
        svg = (0, _illustrations.rain)();
        break;
      default:
        svg = (0, _illustrations.rain)();
        break;
    }
    return (0, _dom.div)([(0, _dom.div)('.app', [(0, _dom.h)('i.material-icons.btn.refresh', 'refresh'), (0, _dom.h2)(data.name), (0, _dom.h4)(data.weather[0].main), (0, _dom.h6)(data.main.temp + '°C')]), svg]);
  });
  return {
    DOM: vtree$,
    HTTP: actions$,
    debug: actions$
  };
}

(0, _xstreamRun.run)(main, {
  DOM: (0, _dom.makeDOMDriver)('#app'),
  HTTP: (0, _http.makeHTTPDriver)(),
  debug: function debug() {
    return function (msg$) {
      return msg$.subscribe({
        next: function next(msg) {
          return console.log(msg);
        },
        error: function error(err) {
          return console.log(err);
        },
        complete: function complete() {
          return console.log('complete');
        }
      });
    };
  }
});