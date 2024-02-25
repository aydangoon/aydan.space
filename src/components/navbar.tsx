'use client'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { Menu } from 'lucide-react'
import { useRef, useState } from 'react'

import type { FC, Nullable } from '@/lib/utils/types'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const Navbar: FC = () => {
  const ref = useRef<Nullable<HTMLElement>>(null)
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
      className="fixed z-20 h-navbar w-full justify-center"
      animate={translateYAnimation}
    >
      <div className="absolute inset-0 bg-background/90" />
      <div className="relative flex items-center justify-between p-6">
        <a className="text-mono text-lg italic" href="/">
          aydan.space
        </a>
        <div className="hidden space-x-8 sm:flex">
          <a href="/projects">Projects</a>
          <a href="/blog">Blog</a>
          <a href="/music">Music</a>
          <a href="/my-mix">My Mix</a>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="inline-block sm:hidden">
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Projects</DropdownMenuItem>
            <DropdownMenuItem>Blog</DropdownMenuItem>
            <DropdownMenuItem>Music</DropdownMenuItem>
            <DropdownMenuItem>My Mix</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.nav>
  )
}

export default Navbar
