import { BrowserWindow, Menu, MenuItem, ipcMain } from 'electron'

const menu = new Menu()
menu.append(new MenuItem({ label: '飞飞飞、' }))
menu.append(new MenuItem({ type: 'separator' }))
menu.append(
  new MenuItem({ label: 'Eledctron', type: 'checkbox', checked: true })
)

// app.on('browser-window-created', function(event, win) {
//   win.webContents.on('context-menu', function(e, params) {
//     menu.popup(win, params.x, params.y)
//   })
// })

ipcMain.on('show-context-menu', function(event) {
  const win = BrowserWindow.fromWebContents(event.sender)
  menu.popup(win)
})
