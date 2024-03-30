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
      }}
    >
      <div
        style={{
          width: 'max(1000px, 100%)',
          height: '100%',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
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
    </div>
  )
}

export default Background
