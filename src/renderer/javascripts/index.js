import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App'
require('application.css')

let root = null

window.onload = () => {
	root = ReactDOM.createRoot(document.getElementById('root'))
}

window.MessagesAPI.subscribeForEntries((_, data) => {
	renderApp(data.entries)
})

const renderApp = (entries = []) => {
	root.render(<App entries={entries} />)
}
