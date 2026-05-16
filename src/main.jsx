import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './components/router/Routes'
import { Toaster } from 'react-hot-toast'
import TimelineProvider from './components/context/TimelineContext'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <Toaster position="top-center" />
    <RouterProvider router={router} />
    </TimelineProvider>
  </StrictMode>,
)
