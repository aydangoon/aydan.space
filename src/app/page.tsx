'use client'
import React, { useEffect, useState } from 'react'

import { FC } from '@/lib/utils/types'

const Home: FC = () => {
  return (
    <div className="h-[200vh]">
      <section className="relative mx-auto flex w-full items-center justify-center px-8 lg:w-[1024px]">
        {/* <div
          style={{ transformOrigin: 'top left', transform: 'rotate(-90deg) translateX(-100%)' }}
          className="absolute left-2 top-0 font-mono uppercase"
        >
          who am i? who am i? who am i?
        </div> */}
        <h1 className="text-center text-4xl font-bold">
          I&apos;m Aydan,
          <br />
          Web Developer
          <br /> based in Brooklyn
        </h1>
      </section>
    </div>
  )
}

export default Home
