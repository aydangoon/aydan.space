const Home = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-[#f8f8fe]">
      <div className="font-mono text-6xl">Hello World</div>
      <div
        className="text-primary flex flex-col items-center justify-center rounded-xl bg-[#fefef8] px-6 py-3 font-mono"
        style={{
          boxShadow: `4px 4px 6px 0px rgba(18, 61, 101, 0.2), -8px -8px 20px 0 rgba(255, 255, 255, 1);
          `,
        }}
      >
        <div>button</div>
        <div
          className="text-primary flex rounded-xl bg-[#fefef8] px-6 py-3 font-mono"
          style={{
            boxShadow: `4px 4px 6px 0px rgba(18, 61, 101, 0.2), -8px -8px 20px 0 rgba(255, 255, 255, 1);
          `,
          }}
        >
          button
        </div>
      </div>
      <div
        className="text-primary flex rounded-xl px-6 py-3 font-mono"
        style={{
          boxShadow: `inset 3px 3px 6px 0 rgba(0, 0, 0, 0.1), inset -6px -6px 12px 0 rgba(255, 255, 255, 1);`,
        }}
      >
        <span className="drop-shadow-2xl">button</span>
      </div>
    </div>
  )
}

export default Home
