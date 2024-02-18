const Home = () => {
  return (
    <div className="min-h-screen bg-[#e7e8e9]">
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
        <div className="flex w-[300px] flex-col space-y-2">
          <h3 className="text-xl">Paragraph Header</h3>
          <p className="text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
