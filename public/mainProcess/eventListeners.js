const { ipcMain, BrowserWindow } = require("electron");

function addWindowEventListeners() {
  ipcMain.on("minimize-application", function (event) {
    BrowserWindow.fromWebContents(event.sender).minimize();
  });

  ipcMain.on("maximize-application", function (event) {
    const window = BrowserWindow.fromWebContents(event.sender);
    window.isMaximized() ? window.unmaximize() : window.maximize();
  });

  ipcMain.on("close-application", function (event) {
    BrowserWindow.fromWebContents(event.sender).close();
  });

  ipcMain.on("is-application-maximized", function (event) {
    event.returnValue = BrowserWindow.fromWebContents(
      event.sender
    ).isMaximized();
  });
}
module.exports = { addWindowEventListeners };
