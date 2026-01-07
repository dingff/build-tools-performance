import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App0 from './f0'
import App1 from './f1'
import App2 from './f2'
import App3 from './f3'
import App4 from './f4'
import App5 from './f5'
import App6 from './f6'
import App7 from './f7'
import App8 from './f8'

import './index.css'
import { AddAlarmOutlined } from '@material-ui/icons'
import { AbcOutlined } from '@mui/icons-material'
import { IconArrowLeft } from '@tabler/icons-react'
import { Button } from 'antd'

const Main = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AbcOutlined />
        <AddAlarmOutlined />
        <IconArrowLeft />
        <Button>按钮</Button>
        <App0 />
        <App1 />
        <App2 />
        <App3 />
        <App4 />
        <App5 />
        <App6 />
        <App7 />
        <App8 />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default Main
