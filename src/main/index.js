'use strict'

import { app, BrowserWindow, ipcMain, dialog } from 'electron'
import path from 'path'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path')
    .join(__dirname, '/static')
    .replace(/\\/g, '\\\\')
}

let mainWindow
const winURL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    // 隐藏标题栏
    frame: false,
    useContentSize: true,
    width: 1000
  })
  // 加载url
  mainWindow.loadURL(winURL)

  mainWindow.webContents.session.on('will-download', (e, item) => {
    // 获取文件的总大小
    const totalBytes = item.getTotalBytes()

    // 设置文件的保存路径，此时默认弹出的 save dialog 将被覆盖
    const filePath = path.join(app.getPath('downloads'), item.getFilename())
    item.setSavePath(filePath)

    // 监听下载过程，计算并设置进度条进度
    item.on('updated', () => {
      console.log('upload')
      mainWindow.setProgressBar(item.getReceivedBytes() / totalBytes)
    })

    // 监听下载结束事件
    item.on('done', (e, state) => {
      console.log('down')
      // 如果窗口还在的话，去掉进度条
      if (!mainWindow.isDestroyed()) {
        mainWindow.setProgressBar(-1)
      }

      // 下载被取消或中断了
      if (state === 'interrupted') {
        dialog.showErrorBox(
          '下载失败',
          `文件 ${item.getFilename()} 因为某些原因被中断下载`
        )
      }

      // 下载完成，让 dock 上的下载目录Q弹一下下
      if (state === 'completed') {
        app.dock.downloadFinished(filePath)
      }
    })
  })

  // 当窗口被关闭时会触发closed事件
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}
// 当Electron启动完毕，可以新建浏览器窗口是会触发ready事件
app.on('ready', createWindow)
// 当所有窗口都关闭是会触发window-all-closed事件
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
// 在OS X中，点击dock上的图标是，如果这个程序没有窗口了，一般会再次新建一个
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('min', e => mainWindow.minimize())
ipcMain.on('max', e => {
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize()
  } else {
    mainWindow.maximize()
  }
})
ipcMain.on('close', e => mainWindow.close())
