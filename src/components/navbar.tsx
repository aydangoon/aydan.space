'use client'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

import { FC } from '@/lib/utils/types'

const Navbar: FC = () => {
  const ref = useRef<HTMLElement | null>(null)
  const { scrollY } = useScroll()
  const translateY = useTransform(() => {
    const height = ref.current?.offsetHeight || 0
    const y = scrollY.get()
    const vy = scrollY.getVelocity()
    return vy > 0 && y > height ? '-100%' : '0%'
  })
  useMotionValueEvent(translateY, 'change', (latest) => {
    setTranslateYAnimation({
      y: latest,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    })
  })
  const [translateYAnimation, setTranslateYAnimation] = useState({})

  return (
    <motion.nav
      ref={ref}
      className="h-navbar fixed w-full justify-center"
      animate={translateYAnimation}
    >
      <div className="bg-background/90 absolute inset-0" />
      <div className="relative flex items-center justify-between p-6">
        <a className="text-mono text-lg italic" href="/">
          aydan.space
        </a>
        <div className="flex space-x-8">
          <a href="/projects">Projects</a>
          <a href="/blog">Blog</a>
          <a href="/music">Music</a>
          <a href="/my-mix">My Mix</a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
