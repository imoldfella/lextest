import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PlaygroundEditor } from './editor'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlaygroundEditor/>
  </React.StrictMode>,
)
