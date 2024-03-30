import { FC } from '@/lib/utils/types'

const Footer: FC = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000 60%, #000 100%)',
      }}
      className="relative z-20 h-footer w-full"
    ></div>
  )
}

export default Footer
