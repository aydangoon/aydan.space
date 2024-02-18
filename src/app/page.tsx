'use client'
import { useState } from 'react'

const Home = () => {
  // COPY THIS CSS? https://neumorphic-ui.webflow.io/

  const [hovered, setHovered] = useState(false)
  console.log('hovered', hovered)
  const unhoveredStyle = '3px 3px 4px 0 rgba(158, 164, 172, 0.25), -3px -3px 4px 0 #fff'
  const hoveredStyle =
    'inset 3px 3px 6px 0 rgba(0, 0, 0, 0.1), inset -6px -6px 12px 0 rgba(255, 255, 255, 1)'
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-[#f0f1f2] text-[#9ea4ac]">
      <div style={{ writingMode: 'vertical-rl' }} className="text-black">
        あいうえお
      </div>
      <div
        className="flex rounded-xl px-6 py-3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          boxShadow: hovered ? hoveredStyle : unhoveredStyle,
        }}
      >
        just you
      </div>
      <div
        className="text-primary font-mont flex rounded-xl px-6 py-3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          boxShadow: hovered ? hoveredStyle : unhoveredStyle,
        }}
      >
        button
      </div>
      <div className="flex flex-col space-y-4">
        <div className="h-6 w-32  bg-purple-500" />
        <div className="h-6 w-32  bg-cyan-500" />
        <div className="h-6 w-32  bg-violet-500" />
      </div>
    </div>
  )
}

export default Home
