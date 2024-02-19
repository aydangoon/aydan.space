import { AlertCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col space-y-8 bg-[#f7f8f9] py-8">
      <Divider text="text" />
      <section className="flex flex-col">
        <div className="flex flex-col space-y-8">
          <h2 className="text-5xl">Huge Statement</h2>
          <h2 className="text-4xl">Section Header</h2>
          <div className="flex flex-col space-y-2">
            <h3 className="text-2xl">Brand Header</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="flex w-[500px] flex-col space-y-2">
            <h3 className="text-xl">Paragraph Header</h3>
            <p className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </section>
      <Divider text="buttons" />
      <section className="inline-flex space-x-4">
        <Button variant="accent">ACCENT</Button>
        <Button variant="primary">PRIMARY</Button>
        <Button variant="secondary">SECONDARY</Button>
        <Button variant="outline">OUTLINE</Button>
        <Button variant="link">LINK</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="skeuo">SKEUOMORPHISM</Button>
        <Button variant="skeuo" size="icon">
          <AlertCircle />
        </Button>
      </section>
    </div>
  )
}

const Divider = ({ text }: { text: string }) => (
  <div className="flex items-center space-x-4">
    <div className="h-[1px] flex-grow bg-black"></div>
    <div className="italic">{text}</div>
    <div className="h-[1px] flex-grow bg-black"></div>
  </div>
)

export default Home
