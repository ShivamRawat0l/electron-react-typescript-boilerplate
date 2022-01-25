const { ipcRenderer, BrowserWindow } = require("electron");
const path = require("path");
const cet = require("custom-electron-titlebar");

let titlebar;

window.addEventListener("DOMContentLoaded", () => {
  titlebar = new cet.Titlebar({
    backgroundColor: cet.Color.fromHex("#388e3c"),
    //icon: new URL(path.join(__dirname, "/assets/images", "/icon.svg")),
    //menu: menu,
    onMinimize: () => {
      ipcRenderer.send("minimize-application");
    },
    onMaximize: () => {
      ipcRenderer.send("maximize-application");
    },
    onClose: () => {
      ipcRenderer.send("close-application");
    },
    isMaximized: () => {
      ipcRenderer.sendSync("is-application-maximized");
    },
    onMenuItemClick: () => {},
  });
});

ipcRenderer.on("window-fullscreen", (event, isFullScreen) => {
  titlebar.onWindowFullScreen(isFullScreen);
});

ipcRenderer.on("window-focus", (event, isFocused) => {
  if (titlebar) titlebar.onWindowFocus(isFocused);
});
