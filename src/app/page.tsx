const Home = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-8 bg-[#f8f8fe]">
      <div
        className="flex rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-300"
        style={{
          boxShadow: `4px 4px 12px 0px rgba(0, 0, 0, 0.1), -8px -8px 20px 0 rgba(255, 255, 255, 0.9),
          inset 3px 3px 6px 0 rgba(0, 0, 0, 0.1), inset -6px -6px 12px 0 rgba(255, 255, 255, 1);`,
          padding: '0px',
        }}
      >
        <div className="text-primary h-full w-full rounded-xl bg-[#fffff8] px-6 py-3 font-mono">
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
