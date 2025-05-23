import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App'
require('application.css')

window.onload = () => {
	ReactDOM.createRoot(document.getElementById('root')).render(<App />)
}
