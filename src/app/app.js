import { run } from '@cycle/xstream-run'
import { makeDOMDriver, h, div, h2, h4, h6 } from '@cycle/dom'
import { makeHTTPDriver } from '@cycle/http'
import xs from 'xstream'

import { sunny, rain } from './illustrations'


const url = 'http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=3fbfd12c63de47c48ecd35ef23b4b656&units=metric'
// fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=3fbfd12c63de47c48ecd35ef23b4b656&units=metric')
// .then(response => response.json())
// .then(parseData)
// .catch(err => console.error(err))

// function parseData(data) {
//   console.log(data)
// }

function main({DOM, HTTP}){
  const actions$ = DOM
  .select('.refresh')
  .events('click')
  .startWith(null)
  .map(ev => ( { url, category: 'refresh' } ))

  const vtree$ = HTTP
  .select('refresh')
  .flatten()
  .map(res => res.body)
  .map(data => {
    let svg
    const id = data.weather[0].id
    switch(id){
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
        svg = rain()
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
        svg = rain()
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
        svg = rain()
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
        svg = rain()
        break;
      // Clear
      case 800:
        svg = sunny()
        break;
      // Clouds
      case 801:
      case 802:
      case 803:
      case 804:
        svg = rain()
        break;
      default:
        svg = rain()
        break;
    }
    return div([
      div('.app', [
        h('i.material-icons.btn.refresh', 'refresh')
      , h2(data.name)
      , h4(data.weather[0].main)
      , h6(data.main.temp + '°C')
      ])
    , svg
    ])

  })
  return {
    DOM: vtree$
  , HTTP: actions$
  , debug: actions$
  }
}

run(main, {
  DOM: makeDOMDriver('#app')
, HTTP: makeHTTPDriver()
, debug: () => msg$ => msg$.subscribe({
    next: (msg) => console.log(msg)
  , error: (err) => console.log(err)
  , complete: () => console.log('complete')
  })
})
