const {ipcMain} = require('electron')

ipcMain.handle('activate-acars', async (event) => {
    alert(event)
})