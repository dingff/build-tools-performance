import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App0 from './f0'
import App1 from './f1'
import App2 from './f2'
import App3 from './f3'
import App4 from './f4'
import './index.css'
import { Form } from '@douyinfe/semi-ui'
import { AddAlarmOutlined } from '@material-ui/icons'
import { AbcOutlined } from '@mui/icons-material'
import { IconArrowLeft } from '@tabler/icons-react'
import { Button } from 'antd'

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
        <App1 />
        <App2 />
        <App3 />
        <App4 />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
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
