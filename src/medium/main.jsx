import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App0 from './f0'
import App1 from './f1'
import App2 from './f2'
import App3 from './f3'
import './index.css'
import { AddAlarmOutlined } from '@material-ui/icons'
import { IconArrowLeft } from '@tabler/icons-react'

const App4 = React.lazy(() => import('./f4'))
const App5 = React.lazy(() => import('./f5'))
const App6 = React.lazy(() => import('./f6'))
const App7 = React.lazy(() => import('./f7'))

const Main = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App0 />
        <App1 />
        <App2 />
        <App3 />
        <AddAlarmOutlined />
        <IconArrowLeft />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/f4" element={<App4 />} />
            <Route path="/f5" element={<App5 />} />
            <Route path="/f6" element={<App6 />} />
            <Route path="/f7" element={<App7 />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </React.StrictMode>
  )
}
export default Main
