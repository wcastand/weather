import electron, { app, BrowserWindow } from 'electron'

let win
const createWindow = () => {
  win = new BrowserWindow({
    width: 128
  , height: 128
  , frame: false
  , resizable: false
  , type: 'textured'
  , skipTaskbar: true
  , titleBarStyle: 'hidden'
  , alwaysOnTop: true
  })
  win.loadURL(`file://${__dirname}/app/index.html`)
  win.webContents.openDevTools()
  win.on('closed', () => win = null)
}
app.on('ready', createWindow)
app.on('window-all-closed', () => process.platform !== 'darwin' ?app.quit() : null)
app.on('activate', () => win === null ? createWindow() : null)
