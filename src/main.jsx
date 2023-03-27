import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@bedrock-layout/css'
import './index.css'
import { AppBoundary } from "@bedrock-layout/appboundary";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppBoundary boundarySize='xlarge'>
    <App />
    </AppBoundary>
  </React.StrictMode>,
)
