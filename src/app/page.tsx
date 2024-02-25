'use client'
import React from 'react'

import { Button } from '@/components/ui/button'
import { FC } from '@/lib/utils/types'

import GlitchedText from './glitched-text'

const Home: FC = () => {
  return (
    <div>
      <div className="fixed inset-0 z-0 opacity-50">
        <img className="absolute left-[8%] top-[12%] h-[15%] rotate-6" src="/imgs/sunflowers.gif" />
        <img
          className="absolute bottom-[20%] right-[18%] h-[15%] rotate-6"
          src="/imgs/violets.gif"
        />
        <img className="absolute right-[16%] top-[12%] h-[15%] -rotate-6" src="/imgs/buds.gif" />
        <img className="absolute bottom-[30%] left-[16%] h-[15%] -rotate-6" src="/imgs/buds2.gif" />
        <img className="absolute bottom-[30%] left-[50%] h-[8%]" src="/imgs/spinning-cd.gif" />
        <img className="absolute right-[30%] top-[20%] h-[8%]" src="/imgs/spinning-cd2.gif" />
        <img className="absolute left-[30%] top-[20%] h-[8%]" src="/imgs/fish-jumping.gif" />
        <img className="absolute left-[50%] top-[25%] h-[8%]" src="/imgs/fish-jumping2.gif" />
      </div>
      <main className="relative z-10 mx-auto w-full px-2 sm:px-8 xl:w-[1280px]">
        <section className="h-[max(70dvh,40rem)] w-full">
          <h1 className="text-center text-3xl font-bold sm:text-4xl">
            I&apos;m Aydan, a
            <br />
            <GlitchedText />
            <br /> based in Brooklyn
          </h1>
        </section>
        <div className="flex w-full flex-col space-y-64">
          <section className="relative flex w-full flex-wrap justify-center pl-8 sm:flex-nowrap">
            <aside
              style={{ transformOrigin: 'top left', transform: 'rotate(-90deg) translateX(-100%)' }}
              className="absolute left-2 top-8 font-mono uppercase"
            >
              who am i? who am i? who am i?
            </aside>
            <div className="w-full p-8 sm:w-1/2">
              <img
                src="/imgs/me.jpg"
                className="rounded-lg shadow-lg"
                style={{
                  transform: 'rotate(-3deg)',
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center space-y-8 p-8 sm:w-1/2">
              <div>
                <h2 className="text-xl font-bold">About Me</h2>
                <div className="text-md">
                  lorem ipsem set dolor sit amet blah blah blah lots of text here blah blah blah
                  lots of text here blah blah blah lots of text here
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="lg">
                  More
                </Button>
              </div>
            </div>
          </section>
          <section className="relative flex w-full flex-wrap justify-center pl-8 sm:flex-nowrap">
            <aside
              style={{ transformOrigin: 'top left', transform: 'rotate(-90deg) translateX(-100%)' }}
              className="absolute left-2 top-8 font-mono uppercase"
            >
              interests? interests? interests?
            </aside>
            <div className="flex w-full flex-col items-start justify-center space-y-8 p-8 sm:w-1/2">
              <div>
                <h2 className="text-xl font-bold">About Me</h2>
                <div className="text-md">
                  lorem ipsem set dolor sit amet blah blah blah lots of text here blah blah blah
                  lots of text here blah blah blah lots of text here
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent">Blog</Button>
                <Button variant="secondary">Music</Button>
                <Button variant="secondary">My mix</Button>
              </div>
            </div>
            <div className="w-full p-8 sm:w-1/2">
              <img
                src="/imgs/greek-bust.gif"
                className="rounded-lg drop-shadow-xl"
                style={{
                  transform: 'rotate(3deg)',
                }}
              />
            </div>
          </section>
          <section className="relative flex w-full flex-wrap justify-center pl-8 sm:flex-nowrap">
            <aside
              style={{ transformOrigin: 'top left', transform: 'rotate(-90deg) translateX(-100%)' }}
              className="absolute left-2 top-8 font-mono uppercase"
            >
              collaboration? collaboration? collaboration?
            </aside>
            <div className="w-full p-8 sm:w-1/2">
              <img
                src="/imgs/me.jpg"
                className="rounded-lg shadow-lg"
                style={{
                  transform: 'rotate(-3deg)',
                }}
              />
            </div>
            <div className="w-full p-8 sm:w-1/2">
              <h2 className="text-center text-xl font-bold">About Me</h2>
              <div className="text-md">
                lorem ipsem set dolor sit amet blah blah blah lots of text here blah blah blah lots
                of text here blah blah blah lots of text here
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home
