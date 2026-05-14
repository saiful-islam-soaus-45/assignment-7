import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import Rootlayout from './layout/Rootlayout'
import HomePage from './pages/homepage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import TimeLine from './pages/timeline/TimeLine'
import Stats from './pages/stats/Stats'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Rootlayout></Rootlayout>,
      children: [
        {
          index:true,
          element: <HomePage></HomePage>
        },
        {
          path:'/timeline',
          element: <TimeLine></TimeLine>
        },
        {
          path:'/stats',
          element: <Stats></Stats>
        }
      ],
      errorElement: <NotFoundPage></NotFoundPage>
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
