export default function Hero() {
  return (
    <section className="relative bg-[url('/images/skate.webp')] bg-cover bg-center min-h-screen">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 flex  items-center justify-center h-full">
        <div className="flex flex-col hero-title-line gap-4 text-center text-4xl md:text-6xl  mt-40">
          <div className="flex flex-col gap-4">
            <span className="text-white font-zen">NATIONAL</span>
            <span className="text-purple-800 bg-black p-2 shadow-md font-zen  shadow-purple-900 skew-1">
              SKATEBOARDING
            </span>
            <span className=" font-zen text-[#39FF14]">SKATE OFF</span>
          </div>
          <p className="text-white font-mono text-2xl mt-10">
            The biggest skateboarding competition in the world
          </p>

          <div className="flex flex-col md:flex-row gap-10 mx-auto">
            <button className="text-black cursor-pointer mx-auto text-xl font-bold bg-[#39FF14] w-40 p-2 rounded shadow-md shadow-black">
              Get Tickets
            </button>
            <button className="cursor-pointer text-xl font-bold bg-white border-4 border-purple-600 text-purple-600 w-60 p-2 rounded shadow-md shadow-black">
              Meet the Skaters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
