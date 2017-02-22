import {h} from '@cycle/dom'
export default h('svg#sunny', {
  'attrs': {
    'version': '1.1',
    'x': '0px',
    'y': '0px',
    'viewBox': '0 0 128 128',
    'space': 'preserve'
  },
  'style': { 'enable-background':'new 0 0 128 128' }
}, [
  h('radialGradient#XMLID_21_', {
    'attrs': {
      'cx': '128',
      'cy': '6.357823e-07',
      'r': '128',
      'gradientUnits': 'userSpaceOnUse'
    }
  }, [
    h('stop', {
      'attrs': { 'offset': '0' },
      'style': { 'stop-color':'#F0C200' }
    }),
    h('stop', {
      'attrs': { 'offset': '0.1895' },
      'style': { 'stop-color':'#F3C70F' }
    }),
    h('stop', {
      'attrs': { 'offset': '0.5512' },
      'style': { 'stop-color':'#FCD535' }
    }),
    h('stop', {
      'attrs': { 'offset': '0.6832' },
      'style': { 'stop-color': '#FFDB45' }
    }),
    h('stop', {
      'attrs': { 'offset': '1' },
      'style': { 'stop-color': '#DEC962' }
    })
  ]),
  h('rect', {
    'attrs': {
      'x': '0',
      'y': '-128',
      'width': '256',
      'height': '256'
    },
    style: { fill:'url(#XMLID_21_)' }
  })
])
