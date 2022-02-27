    // electron/electron.js
    const path = require('path');
    const { app, BrowserWindow, TouchBar, nativeImage, systemPreferences } = require('electron')
    const { TouchBarLabel, TouchBarButton } = TouchBar

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
        systemPreferences.promptTouchID('TouchID per accedere').then(success => {
            setTimeout(() => {
                splash.close()
                mainWindow.show()
            }, 5000)
        }).catch(err => {
            console.log(err)
        })
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