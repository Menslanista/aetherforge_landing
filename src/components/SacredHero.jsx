export default function SacredHero() {
  return (
    <div className="text-center space-y-6 animate-fadeIn">
      <img
        src="/logo-white.svg"
        alt="Sacred Geometry Logo"
        className="mx-auto w-32 h-32 animate-spin-slow"
      />
      <h1 className="text-5xl font-bold tracking-wide">🌌 AETHERFORGE</h1>
      <p className="text-lg text-starlight max-w-xl mx-auto">
        A living forge of worlds, where imagination crystallizes into reality.  
        Together, we unlock galaxies within the human mind.
      </p>
      <a
        href="https://github.com/Menslanista/aetherforge"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-starlight text-void rounded-2xl shadow-lg hover:scale-105 transition"
      >
        Enter the Forge
      </a>
    </div>
  );
}
