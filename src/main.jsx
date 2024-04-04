import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { theme } from './config/mantine.config.js'
// import { MantineProvider } from '@mantine/core'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
  </React.StrictMode>
  
 ,
)
