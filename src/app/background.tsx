import { useWindowSize } from '@uidotdev/usehooks'

import { FC } from '@/lib/utils/types'

const Background: FC = () => {
  const { width, height } = useWindowSize()
  console.log(width, height)
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
        opacity: 0.5,
      }}
    >
      <div
        style={{
          width: '1200px',
          height: '100%',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          border: '4px solid red',
        }}
      >
        {/* waves */}
        <BgImg src="/imgs/bg/waves.webp" cx={0.5} cy={0.5} scale={0.1} />
      </div>
    </div>
  )
}

type BgImgProps = {
  cx: number
  cy: number
  src: string
  scale?: number
}

const BgImg: FC<BgImgProps> = (props) => {
  const { cx, cy, scale } = props
  return (
    <img
      alt=""
      src={props.src}
      style={{
        position: 'absolute',
        top: `${100 * cy}%`,
        left: `${100 * cx}%`,
        transform: `translate(-50%, -50%) scale(${scale ?? 1})`,
        border: '4px solid blue',
      }}
    />
  )
}

export default Background
