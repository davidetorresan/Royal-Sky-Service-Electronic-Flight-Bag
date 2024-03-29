    // electron/electron.js
    const path = require('path');
    const { app, BrowserWindow, TouchBar, nativeImage, systemPreferences } = require('electron')
    const { TouchBarLabel, TouchBarButton } = TouchBar
    const config = require('../config.json')
    require('./acars')

    const isDev = process.env.IS_DEV == "true" ? true : false;
// src/background.js


    function createWindow() {
        const mainWindow = new BrowserWindow({
            width: 1400,
            height: 900,
            minHeight: 800,
            minWidth: 1400,
            webPreferences: {
                nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
                contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
                enableRemoteModule: true,
                preload: path.join(__dirname, 'preload.js'),
            },
            show: false,
        });

        mainWindow.loadURL(
            isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../dist/index.html')}`
        );

        const image = nativeImage.createFromPath('./assets/icon.png').resize({ height: 30 });

        const label = new TouchBarLabel({
            label: 'Royal Sky Service™ Electronic Flight Bag',
            accessibilityLabel: 'Button looking like a label',
            backgroundColor: '#000',
        });
        const button = new TouchBarButton({
            icon: image,
            iconPosition: 'left',
            label: '',
            accessibilityLabel: '',
            backgroundColor: '#000',
        });

        const touchBar = new TouchBar({
            items: [label, button], 
        });

        mainWindow.setTouchBar(touchBar);
        
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

        if(config.isLoggedIn){
            if (process.platform === 'darwin' && config.macOsUser.touchID) {
                systemPreferences.promptTouchID('TouchID per accedere').then(success => {
                    setTimeout(() => {
                        splash.close()
                        mainWindow.show()
                    }, 1000)
                }).catch(err => {
                    console.log(err)
                })
            }  
            if (process.platform !== 'darwin') {
                setTimeout(() => {
                    splash.close()
                    mainWindow.show()
                }, 2000)
            }
        }else{
            setTimeout(() => {
                splash.close()
                mainWindow.show()
            }, 5000)
        }
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