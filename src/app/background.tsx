import { motion } from 'framer-motion'

import { FC } from '@/lib/utils/types'

const Background: FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: '0',
        zIndex: 0,
        width: '100dvw',
        height: '100dvh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
      }}
    >
      <div
        style={{
          width: 'max(1100px, 100%)',
          height: '100%',
          position: 'absolute',
          overflow: 'hidden',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'url(/imgs/bg/stars.webp)',
        }}
        className="border-[1rem] border-background"
      >
        {/* sky */}
        <BgImg asset="smiley-clouds" cx={0.04} cy={0.6} scale={0.2} />
        <BgImg asset="pink-clouds" cx={0.12} cy={0.6} scale={0.2} />
        <BgImg asset="star-cloud" cx={0.08} cy={0.6} scale={1.2} />
        <BgImg asset="seagull" cx={0.2} cy={0.6} scale={0.1} />
        <BgImg asset="seagull" cx={0.3} cy={0.7} scale={0.1} />
        {/* sea */}
        <BgImg asset="waves" cx={0.1} cy={0.9} scale={0.62} />
        <BgImg asset="waves" cx={0.3} cy={0.9} scale={0.62} />
        <BgImg asset="waves" cx={0.5} cy={0.9} scale={0.62} />
        <BgImg asset="waves" cx={0.7} cy={0.9} scale={0.62} />
        <BgImg asset="waves" cx={0.9} cy={0.9} scale={0.62} />
        <BgImg asset="waves" cx={0.0} cy={0.95} scale={0.62} />
        <BgImg asset="waves" cx={0.2} cy={0.95} scale={0.62} />
        <BgImg asset="waves" cx={0.4} cy={0.95} scale={0.62} />
        <BgImg asset="waves" cx={0.6} cy={0.95} scale={0.62} />
        <BgImg asset="waves" cx={0.8} cy={0.95} scale={0.62} />
        <BgImg asset="waves" cx={1.0} cy={0.95} scale={0.62} />

        <BgImg asset="clownfish" cx={0.6} cy={0.89} scale={0.4} />
        <BgImg asset="flopfish" cx={0.3} cy={0.89} scale={0.3} />
        <BgImg asset="tuna" cx={0.8} cy={0.89} scale={0.2} />
        <BgImg asset="dolphin" cx={0.5} cy={0.88} scale={0.2} />
        <BgImg asset="goldfish" cx={0.94} cy={0.85} scale={0.3} />

        <BgImg asset="whale" cx={0.75} cy={0.88} scale={0.2} />

        <BgImg asset="umbrella" cx={0.94} cy={0.89} scale={0.5} />

        <BgImg asset="birds-kissing" cx={0.02} cy={0.7} scale={0.15} />
        <BgImg asset="fairy" cx={0.2} cy={0.8} scale={0.15} />
        <BgImg asset="houses" cx={0.08} cy={0.78} scale={0.5} />
        <BgImg asset="tall-grass-with-fox" cx={0.16} cy={0.92} scale={0.35} />
        <BgImg asset="bouncy-flower" cx={0.2} cy={0.92} scale={0.2} />
        <BgImg asset="grass2" cx={0.03} cy={0.94} scale={0.5} />
        <BgImg asset="grass" cx={0.08} cy={0.89} scale={0.6} />
      </div>
    </div>
  )
}

type BgImgProps = {
  cx: number
  cy: number
  asset: string
  scale?: number
  rotate?: number
}

const BgImg: FC<BgImgProps> = (props) => {
  const { cx, cy, asset, rotate } = props
  const scale = props.scale ?? 1
  return (
    <motion.img
      alt=""
      src={`/imgs/bg/${asset}.webp`}
      initial={{
        opacity: 0,
        transform: `translate(-50%, -50%) scale(${0.8 * scale}) rotate(${(rotate ?? 0) - 4}deg)`,
      }}
      animate={{
        opacity: 1,
        transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotate ?? 0}deg)`,
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 8,
        duration: 2,
      }}
      style={{
        position: 'absolute',
        top: `${100 * cy}%`,
        left: `${100 * cx}%`,
      }}
    />
  )
}

export default Background
