import Image from "next/image";
import Hero from "./sections/Hero";
import Testmonials from "./sections/Testmonials";
import Tracks from "./sections/Tracks";
import Trust from "./sections/Trust";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="min-h-screen w-full">
        <Hero />
        <Trust />
        <Tracks />
        <Testmonials/>
      </main>
    </div>
  );
}
