import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App'
require('application.css')

window.MessagesAPI.subscribeForEntries((_, data) => {
	console.log(data.entries)
})

window.onload = () => {
	ReactDOM.createRoot(document.getElementById('root')).render(<App />)
}
