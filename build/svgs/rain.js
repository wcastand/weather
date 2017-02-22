"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = require("@cycle/dom");

exports.default = (0, _dom.h)("svg#rain", {
  "attrs": {
    "version": "1.1",
    "x": "0px",
    "y": "0px",
    "viewBox": "0 0 128 128",
    "space": "preserve"
  },
  "style": { 'enable-background': 'new 0 0 128 128' }
}, [(0, _dom.h)("radialGradient#XMLID_66_", {
  "attrs": {
    "cx": "64",
    "cy": "64",
    "r": "64",
    "gradientTransform": "matrix(1.9965 0 0 1.9981 0 -127.7539)",
    "gradientUnits": "userSpaceOnUse"
  }
}, [(0, _dom.h)("stop", {
  "attrs": {
    "offset": "0"
  },
  "style": { 'stop-color': '#597778' }
}), (0, _dom.h)("stop", {
  "attrs": {
    "offset": "1"
  },
  "style": { 'stop-color': '#2C5363' }
})]), (0, _dom.h)("rect", {
  "attrs": {
    "y": "-127.8",
    "width": "255.5",
    "height": "255.8"
  },
  "style": { fill: 'url(#XMLID_66_)' }
}), (0, _dom.h)("path", {
  "attrs": {
    "d": "M320.6,160.4l38,0.1l-2.7-32.1l-7.4-3.2l-7-9.4l-8.2-8l-3.3,8l-15.2,15l-1-9.2l-11.1-11.2L290.3,90l-8.4,11.1l-12.3,14.7c0,0-20.7,16.4-23.3,18.8c-1.5,1.4-4.3,9.1-6.5,15.5l0.5-9.8l-12.9-11.9l-32.6,30.2l44.5,0.5l81.4,1.4L320.6,160.4z"
  },
  "style": { fill: '#97B4BF' }
}), (0, _dom.h)("path", {
  "attrs": {
    "d": "M389.1,166.8c-6-9.9-12-19.9-18.3-29.6c-1-1.6-3.3-1.6-5-2.4c-1.7-0.8-4.2-1.2-4.8-2.8c-1.5-4.5-4.1-6.2-7.2-6.7c-3.7-0.6-6.2-3.1-8.6-6.7c-2.4-3.5-5-6.7-7.8-9.5c-2.4-2.4-4.8-2-6.7,1.7c-1,1.9-2.4,3.4-3.7,5c-1.7,2-3.8,3.5-5.2,5.8c-3.2,5.7-4.6,5.6-8,0.1c-2.3-3.6-5.3-6.3-8-9.5c0.4,1.2,0.8,2.4,1.3,3.6c2.2,2.6,4.3,5.3,6.5,7.9c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1,0-0.2,0-0.3,0.1c0.5,2.4,1.1,4.9,1.6,7.5c-2.1,2.6-4.5,2-6.9,0.7c-4.4-2.4-5.8-1.8-9.1,2.8c-1.9,2.6-4,4.9-6.2,6.8c-4.5,3.8-7.3,9.4-10.4,16.1c5.4-2.7,7.2-10.9,12.9-10.7c0.1,0,0.3-0.5,0.4-0.7c2.4-2.5,4.8-5.1,7.2-7.5c0.6-0.5,1.7-0.9,2.2-0.5c3.3,3.2,7.5,4.4,9.7,9.8c1.8,4.4,4.2,8.4,6.3,12.6c0.3-0.2,0.6-0.5,0.9-0.7c-1.3-3.7-2.8-7.2-3.9-11c-0.6-2-1.3-5.1-0.6-6.5c2.6-5.4,2.9-10.1-0.9-14.6c1.1,1.4,2.2,2.8,3.8,4.7c3.6-7.4,10.6-10.1,12.5-19.4c0.8-3.7,3.1-3.5,4.7-1.1c2.4,3.7,4.5,7.7,6.5,11.9c1.6,3.4,3.3,5.3,6.6,4.9c3.6-0.5,6.7,1.4,7.8,6.3c1.6,7,2.7,14.1,4.1,21.1c0.5-3.6,1-7.8,1.8-11.8c0.3-1.5,1.3-2.8,2.2-3.9c0.2-0.2,1.5,1,2.1,1.8c5,7.4,9.7,15,14.8,22.1c1.7,2.3,4.3,3.5,6.5,5.2C389.6,167.9,389.4,167.3,389.1,166.8z"
  },
  "style": { fill: '#6F92A3' }
}), (0, _dom.h)("path", {
  "attrs": {
    "d": "M290.3,90c-8.1,4.9-15.2,16-20.3,24.7c0.5-2.6-0.7-2.8-1.9-2.2c-3.2,1.8-6.7,3.2-9.5,5.8c-3.8,3.7-7.1,8.3-10.6,12.6c-4.7,5.8-5.4,6.5-10.2,1.2c-7-7.8-13.3-6.1-19.8,0.3c-2.3,2.2-4.4,4.8-6.5,7.2c-1.1,1.2-2,3-3.3,3.6c-5.5,2.6-9.6,7.6-13.5,13.2c-2.7,4-6.3,6.9-9.5,10.3c3.8-0.8,7.5-1.8,10.7-4.3c7.9-6.1,15.9-12.3,22.4-21.3c1.9-2.6,3.9-5.1,6-7.3c3.2-3.4,4.1-3,6.6,1.2c1.5,2.5,3.2,5.4,5.3,6.7c2.6,1.6,2.7,3.5,1.9,6.4c-1.7,5.7-3.4,11.3-5.1,17c3.7-4.4,7.7-9,10.4-14.6c2.4-4.9,5.1-9.1,8.5-12.5c0.8-0.8,1.6-1.6,2-2.6c3.1-7.8,7.9-13.2,13.5-17.5c-1.2,11-6.8,18.4-12.3,26.9c5.4-0.4,8.2-4.3,10.6-9c1.5-3,2.7-6.3,4.2-9.3c1.6-3.3,4-6.2,5-9.8c1.8-6.1,5-10.2,8.3-14.5C285.3,99.7,288.5,93.3,290.3,90z"
  },
  "style": { fill: '#6F92A3' }
}), (0, _dom.h)("path", {
  "attrs": {
    "d": "M296.1,96.1c-0.6-0.8-0.8-2.1-1.4-2.7c-1.4-1.3-2.8-2.5-4.4-3.4c-0.3-0.2-1.1,1.2-2,2.1c5.7,2.9,9.4,8.1,10.6,14.6c1.3,6.8,4.5,7.9,8.3,9.2c-0.4-1.2-0.8-2.4-1.3-3.6c-1.9-3.6-3.7-7.3-5.7-10.7C299,99.5,297.4,97.9,296.1,96.1z"
  },
  "style": { fill: '#6F92A3' }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "68.2",
    "y1": "-17.7",
    "x2": "56.2",
    "y2": "30.9"
  },
  "style": {
    opacity: 0.8,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "68.2",
    "y1": "22.2",
    "x2": "56.2",
    "y2": "70.8"
  },
  "style": {
    opacity: 0.15,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "83.9",
    "y1": "-1.4",
    "x2": "67.7",
    "y2": "66.9"
  },
  "style": {
    opacity: 0.25,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "79.7",
    "y1": "74",
    "x2": "67.7",
    "y2": "122.6"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "95.4",
    "y1": "50.3",
    "x2": "79.2",
    "y2": "118.6"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "99.6",
    "y1": "11.9",
    "x2": "87.6",
    "y2": "60.5"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "115.3",
    "y1": "-11.8",
    "x2": "99.1",
    "y2": "56.5"
  },
  "style": {
    opacity: 0.25,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "83.9",
    "y1": "34.8",
    "x2": "67.7",
    "y2": "98.9"
  },
  "style": {
    opacity: 0.25,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "110.1",
    "y1": "19.3",
    "x2": "93.9",
    "y2": "87.6"
  },
  "style": {
    opacity: 0.15,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "121.6",
    "y1": "71.1",
    "x2": "105.4",
    "y2": "139.3"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "110.1",
    "y1": "55.5",
    "x2": "93.9",
    "y2": "119.6"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "138.3",
    "y1": "16.3",
    "x2": "122.1",
    "y2": "84.6"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "142.5",
    "y1": "-22.1",
    "x2": "130.5",
    "y2": "26.5"
  },
  "style": {
    opacity: 1,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "126.8",
    "y1": "0.8",
    "x2": "110.6",
    "y2": "64.9"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "64",
    "y1": "82.9",
    "x2": "47.8",
    "y2": "151.2"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "68.2",
    "y1": "44.4",
    "x2": "56.2",
    "y2": "93"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "52.5",
    "y1": "67.4",
    "x2": "36.3",
    "y2": "131.5"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "134.1",
    "y1": "69.6",
    "x2": "117.9",
    "y2": "137.9"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "138.3",
    "y1": "31.1",
    "x2": "126.3",
    "y2": "79.7"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "122.6",
    "y1": "54",
    "x2": "106.4",
    "y2": "118.2"
  },
  "style": {
    opacity: 0.15,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "-18.6",
    "y1": "-26.6",
    "x2": "-30.6",
    "y2": "22"
  },
  "style": {
    opacity: 0.8,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "-18.6",
    "y1": "13.4",
    "x2": "-30.6",
    "y2": "62"
  },
  "style": {
    opacity: 0.15,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "-2.9",
    "y1": "-10.3",
    "x2": "-19.1",
    "y2": "58"
  },
  "style": {
    opacity: 0.25,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "-7.1",
    "y1": "65.1",
    "x2": "-19.1",
    "y2": "113.7"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "8.6",
    "y1": "41.5",
    "x2": "-7.6",
    "y2": "109.8"
  },
  "style": {
    opacity: 0.25,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "12.8",
    "y1": "3",
    "x2": "0.8",
    "y2": "51.6"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "28.5",
    "y1": "-20.6",
    "x2": "12.3",
    "y2": "47.6"
  },
  "style": {
    opacity: 0.25,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "-2.9",
    "y1": "25.9",
    "x2": "-19.1",
    "y2": "90.1"
  },
  "style": {
    opacity: 0.25,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "23.2",
    "y1": "10.4",
    "x2": "7",
    "y2": "78.7"
  },
  "style": {
    opacity: 0.15,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "34.8",
    "y1": "62.2",
    "x2": "18.5",
    "y2": "130.5"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "23.2",
    "y1": "46.6",
    "x2": "7",
    "y2": "110.8"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "51.5",
    "y1": "7.5",
    "x2": "35.3",
    "y2": "75.7"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "55.7",
    "y1": "-31",
    "x2": "43.6",
    "y2": "17.6"
  },
  "style": {
    opacity: 1,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "40",
    "y1": "-8.1",
    "x2": "23.8",
    "y2": "56"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "-22.8",
    "y1": "74",
    "x2": "-39",
    "y2": "142.3"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "-18.6",
    "y1": "35.6",
    "x2": "-30.6",
    "y2": "84.1"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "-34.3",
    "y1": "58.5",
    "x2": "-50.5",
    "y2": "122.6"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "47.3",
    "y1": "60.7",
    "x2": "31.1",
    "y2": "129"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "51.5",
    "y1": "22.2",
    "x2": "39.5",
    "y2": "70.8"
  },
  "style": {
    opacity: 0.5,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
}), (0, _dom.h)("line", {
  "attrs": {
    "x1": "35.8",
    "y1": "45.2",
    "x2": "19.6",
    "y2": "109.3"
  },
  "style": {
    opacity: 0.15,
    fill: 'none',
    stroke: '#D4D4D4',
    'stroke-width': 0.25,
    'stroke-miterlimit': 10
  }
})]);