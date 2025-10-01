import SacredHero from "./components/SacredHero";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic to-void text-white flex flex-col items-center justify-center">
      <SacredHero />
      <footer className="absolute bottom-4 text-starlight text-sm">
        © {new Date().getFullYear()} AETHERFORGE — Unlock Galaxies Within
      </footer>
    </div>
  );
}
