import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App0 from './f0'
import './index.css'
import { Form } from '@douyinfe/semi-ui'
import { AddAlarmOutlined } from '@material-ui/icons'
import { AbcOutlined } from '@mui/icons-material'
import { IconArrowLeft } from '@tabler/icons-react'
import { Button } from 'antd'

const App1 = React.lazy(() => import('./f1'))
const App2 = React.lazy(() => import('./f2'))
const App3 = React.lazy(() => import('./f3'))
const App4 = React.lazy(() => import('./f4'))
const App5 = React.lazy(() => import('./f5'))
const App6 = React.lazy(() => import('./f6'))
const App7 = React.lazy(() => import('./f7'))
const App8 = React.lazy(() => import('./f8'))

const Main = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AbcOutlined />
        <AddAlarmOutlined />
        <IconArrowLeft />
        <Button>按钮</Button>
        <Form>
          <Form.Input field="name" initValue="semi design" />
        </Form>
        <App0 />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/f1" element={<App1 />} />
            <Route path="/f2" element={<App2 />} />
            <Route path="/f3" element={<App3 />} />
            <Route path="/f4" element={<App4 />} />
            <Route path="/f5" element={<App5 />} />
            <Route path="/f6" element={<App6 />} />
            <Route path="/f7" element={<App7 />} />
            <Route path="/f8" element={<App8 />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default Main
