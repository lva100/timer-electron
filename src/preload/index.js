// https://electronjs.org/docs/tutorial/security
// Preload File that should be loaded into browser window instead of
// setting nodeIntegration: true for browser window

import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('MessagesAPI', {
	subscribeForEntries: callback => {
		ipcRenderer.on('entries', callback)
	},
	subscribeForTimer: callback => {
		ipcRenderer.on('tick', callback)
	},
	startTimer: title => {
		ipcRenderer.send('timer:start', { title })
	},
	stopTimer: () => {
		ipcRenderer.send('timer:stop')
	},
})
