'use client'
import dynamic from 'next/dynamic'

const Main = dynamic(() => import('../medium/main.jsx'), { ssr: false })

export default function Page() {
  return <Main />
}
