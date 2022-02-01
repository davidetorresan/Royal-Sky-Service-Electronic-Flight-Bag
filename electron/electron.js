    // electron/electron.js
    const path = require('path');
    const { app, BrowserWindow } = require('electron');

    const isDev = process.env.IS_DEV == "true" ? true : false;

    function createWindow() {
        const mainWindow = new BrowserWindow({
            width: 1400,
            height: 900,
            minHeight: 800,
            minWidth: 1400,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js'),
                nodeIntegration: true,
            },
            show: false,
        });

        mainWindow.loadURL(
            isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../dist/index.html')}`
        );
        
        //mainWindow.removeMenu()
        
        const splash = new BrowserWindow({
            width: 800,
            height: 500,
            transparent: true,
            alwaysOnTop: true,
            frame: false
        })

        splash.loadURL(
            isDev
            ? `file://${path.join(__dirname, '../splash.html')}`
            : `file://${path.join(__dirname, '../dist/splash.html')}`
        );
        setTimeout(() => {
            splash.close()
            mainWindow.show()
        }, 5000)
    }

    app.whenReady().then(() => {
        createWindow()
        app.on('activate', function () {
            if (BrowserWindow.getAllWindows().length === 0) createWindow()
        })
    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });