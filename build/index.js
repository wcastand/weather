'use strict';

var _electron = require('electron');

var _electron2 = _interopRequireDefault(_electron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var win = void 0;
var createWindow = function createWindow() {
  win = new _electron.BrowserWindow({
    width: 128,
    height: 128,
    frame: false,
    resizable: false,
    type: 'textured',
    skipTaskbar: true,
    titleBarStyle: 'hidden',
    alwaysOnTop: true
  });
  win.loadURL('file://' + __dirname + '/app/index.html');
  win.webContents.openDevTools();
  win.on('closed', function () {
    return win = null;
  });
};
_electron.app.on('ready', createWindow);
_electron.app.on('window-all-closed', function () {
  return process.platform !== 'darwin' ? _electron.app.quit() : null;
});
_electron.app.on('activate', function () {
  return win === null ? createWindow() : null;
});