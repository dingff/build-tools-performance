'use client'
import dynamic from 'next/dynamic'

// 动态加载 App 组件，禁用 SSR
const Main = dynamic(() => import('../medium/main.jsx'), { ssr: false })

export default function Page() {
  return <Main />
}
