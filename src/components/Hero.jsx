export default function Hero() {
  return (
    <section className="relative bg-[url('/images/skate.jpg')] bg-cover bg-center min-h-screen">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex  items-center justify-center h-full">
        <div className="flex flex-col gap-4 text-center text-6xl font-zen mt-40">
          <span className="text-white">National</span>
          <span className="text-purple-800 bg-black p-2 shadow-md  shadow-purple-900 skew-1">
            Skateboarding
          </span>
          <span className="text-6xl font-zen text-[#39FF14]">Skate Off</span>
        </div>
      </div>
    </section>
  );
}
