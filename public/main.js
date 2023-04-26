const { app, BrowserWindow } = require('electron')

function createWindows() {
    const controlWin = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {}
    })
    const overlayWin = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {}
    })
    overlayWin.loadURL('http://localhost:3000/Overlay')
    controlWin.loadURL('http://localhost:3000')
}

app.on('ready', createWindows)