const { app, BrowserWindow } = require("electron");

let mainWindow;
// let splashWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // show: false,
    transparent: true,
    // frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL("http://localhost:3000/");

  //   splashWindow = new BrowserWindow({
  //     width: 800,
  //     height: 600,
  //     show: false,
  //     frame: false,
  //   });

  //   splashWindow.loadFile("public/splash.html");
};

app.whenReady().then(() => {
  createWindow();

  //   splashWindow.show();

  //   setTimeout(() => {
  //     mainWindow.show();

  //     splashWindow.close();
  //   }, 2000);
});

// app.on("activate", () => {
//   if (BrowserWindow.getAllWindows().length === 0) createWindow();
// });

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
