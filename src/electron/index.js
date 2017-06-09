import { join } from 'path';
import { app, BrowserWindow } from 'electron';
import { isDevelopment } from './utils';

if (isDevelopment) {
  require('./debug').default(); // eslint-disable-line global-require
}

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL(`file://${join(__dirname, isDevelopment ? '../../dist/index.html' : 'index.html')}`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
