import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App'
import './index.css'
import { DeviceProvider } from './Context/deviceContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <DeviceProvider>
        <App />
    </DeviceProvider>
)
