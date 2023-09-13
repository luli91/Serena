import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  //toda mi aplicacion esta provista por Chakra ui
  <ChakraProvider>
    <App />
  </ChakraProvider>
  
)
