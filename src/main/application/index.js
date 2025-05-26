import { app, BrowserWindow } from 'electron'
import path from 'path'
import { Storage } from './storage'
import { Timer } from './timer'

export default class TimerApp {
	constructor() {
		this.storage = new Storage()
		this.timer = new Timer()
		this.subscribeForAppEvents()
		app.whenReady().then(() => this.createWindow())
	}
	createWindow() {
		this.window = new BrowserWindow({
			title: CONFIG.name,
			width: CONFIG.width,
			height: CONFIG.height,
			minWidth: CONFIG.width,
			minHeight: CONFIG.height,
			maxWidth: CONFIG.width,
			maxHeight: CONFIG.height,
			// remove the default titlebar
			titleBarStyle: 'hidden',
			// expose window controls in Windows/Linux
			...(process.platform !== 'darwin' ? { titleBarOverlay: true } : {}),
			titleBarOverlay: {
				color: '#3498db',
				symbolColor: '#fff',
				height: 32,
			},
			webPreferences: {
				worldSafeExecuteJavaScript: true,
				preload: path.join(app.getAppPath(), 'preload', 'index.js'),
				// nodeIntegration: true,
			},
		})

		this.window.loadFile('renderer/index.html')

		this.window.webContents.openDevTools({ mode: 'detach' })

		this.timer.onChange = () => {
			this.window.webContents.send('tick', {
				time: this.timer.get(),
			})
		}

		this.window.webContents.on('did-finish-load', () => {
			this.window.webContents.send('entries', {
				entries: this.storage.get('entries'),
			})
		})

		this.window.on('closed', () => {
			this.timer.onChange = null
			this.window = null
		})
		// const storage = new Storage()
		// debugger
	}

	subscribeForAppEvents() {
		app.on('window-all-closed', () => {
			if (process.platform !== 'darwin') {
				app.quit()
			}
		})

		app.on('activate', () => {
			if (BrowserWindow.getAllWindows().length === 0) {
				this.createWindow()
			}
		})
	}
}
