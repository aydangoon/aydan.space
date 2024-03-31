import { motion } from 'framer-motion'

import { cn } from '@/lib/utils/shadcn'
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
        {/* stars */}
        <BgImg asset="shooting-star" cx={0.5} cy={0.3} scale={0.2} />
        <BgImg asset="shooting-star" cx={0.4} cy={0.2} scale={0.2} />
        <BgImg asset="shooting-star" cx={0.6} cy={0.1} scale={0.2} />
        <BgImg asset="shooting-star2" cx={0.5} cy={0.5} scale={0.2} />
        <BgImg asset="shooting-star2" cx={0.4} cy={0.4} scale={0.2} />
        <BgImg asset="shooting-star3" cx={0.58} cy={0.45} scale={0.2} />
        <BgImg asset="golden-stars" cx={0.7} cy={0.2} scale={0.05} />
        <BgImg asset="spiral-galaxy" cx={0.77} cy={0.35} scale={0.1} />
        <BgImg asset="galaxy" cx={0.65} cy={0.35} scale={0.1} />
        <BgImg asset="saturn" cx={0.25} cy={0.3} scale={0.3} />
        <BgImg asset="saturn2" cx={0.12} cy={0.16} scale={0.2} />
        <BgImg asset="saturn3" cx={0.82} cy={0.2} scale={0.2} rotate={-80} />
        {/* sky */}
        <BgImg asset="smiley-clouds" cx={0.04} cy={0.6} scale={0.2} />
        <BgImg asset="pink-clouds" cx={0.12} cy={0.6} scale={0.2} />
        <BgImg asset="star-cloud" cx={0.08} cy={0.6} scale={1.2} />
        <BgImg asset="seagull" cx={0.2} cy={0.6} scale={0.1} />
        <BgImg asset="seagull" cx={0.3} cy={0.7} scale={0.1} />
        <BgImg asset="seagulls" cx={0.7} cy={0.6} scale={0.3} />

        {/* vaporwave */}
        <BgImg asset="vaporwave-sun" cx={0.5} cy={0.88} scale={0.5} />

        <BgImg asset="retrowave" cx={0.95} cy={0.16} scale={0.14} rotate={10} />
        <BgImg asset="mspaint" cx={0.95} cy={0.17} scale={0.2} rotate={10} />

        <BgImg asset="pink-sky" cx={0.96} cy={0.3} scale={0.2} rotate={-10} />
        <BgImg asset="mspaint" cx={0.96} cy={0.3} scale={0.3} rotate={-10} />
        <BgImg asset="right-click" cx={0.92} cy={0.4} scale={0.3} />

        <BgImg asset="man-and-cat" cx={0.97} cy={0.5} scale={0.22} />
        <BgImg asset="vaporwave-beach" cx={1} cy={0.62} scale={0.3} />
        <BgImg asset="astronaut-cat" cx={0.87} cy={0.67} scale={0.2} rotate={-45} />
        <BgImg asset="vaporwave-pointing" cx={0.93} cy={0.53} scale={0.5} />
        <BgImg asset="vaporwave-bg" cx={0.94} cy={0.8} scale={0.5} rotate={-45} />
        <BgImg asset="greek-bust-astronaut-mirror" cx={0.94} cy={0.8} scale={0.4} />
        {/* <BgImg asset="greek-bust" cx={0.95} cy={0.8} scale={0.7} /> */}

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

        <BgImg asset="clownfish" cx={0.4} cy={0.96} scale={0.3} />
        <BgImg asset="flopfish" cx={0.3} cy={0.89} scale={0.3} />
        <BgImg asset="tuna" cx={0.8} cy={0.89} scale={0.2} />
        <BgImg asset="dolphin" cx={0.5} cy={0.88} scale={0.2} />
        <BgImg asset="goldfish" cx={0.96} cy={0.88} scale={0.3} />
        <BgImg asset="whale" cx={0.7} cy={0.88} scale={0.2} />

        {/* land on left */}
        <BgImg asset="crescant-moon" cx={0.02} cy={0.33} scale={0.11} rotate={20} />
        <BgImg asset="birds-kissing" cx={0.02} cy={0.4} scale={0.15} />
        <BgImg asset="fairy" cx={0.2} cy={0.8} scale={0.15} />
        <BgImg asset="houses" cx={0.08} cy={0.78} scale={0.5} />
        <BgImg asset="tall-grass-with-fox" cx={0.16} cy={0.92} scale={0.35} />
        <BgImg asset="bouncy-flower" cx={0.2} cy={0.92} scale={0.2} />
        <BgImg asset="grass2" cx={0.03} cy={0.94} scale={0.5} />
        <BgImg asset="grass" cx={0.08} cy={0.89} scale={0.6} />

        <BgImg asset="umbrella" cx={0.95} cy={0.93} scale={0.3} />
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
  className?: string
}

const BgImg: FC<BgImgProps> = (props) => {
  const { cx, cy, asset, rotate } = props
  const scale = props.scale ?? 1
  const animate = true
  return animate ? (
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
  ) : (
    <img
      alt=""
      src={`/imgs/bg/${asset}.webp`}
      style={{
        position: 'absolute',
        top: `${100 * cy}%`,
        left: `${100 * cx}%`,
        transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotate ?? 0}deg)`,
      }}
      className={cn(props.className)}
    />
  )
}

export default Background
