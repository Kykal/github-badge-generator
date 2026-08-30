import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';

import { createTheme } from '@mantine/core';

import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react'
import App from './App.tsx'


const rootElement = document.getElementById('root')!
const theme = createTheme({});



createRoot(rootElement).render(
  <StrictMode>
    <MantineProvider theme={theme}>
    <App />
    </MantineProvider>
  </StrictMode>,
)
