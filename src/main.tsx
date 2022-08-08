import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '@/views/App'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '@/views/theme'
import ToggleColorMode from './views/Main'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToggleColorMode />
    </BrowserRouter>
  </React.StrictMode>

)
