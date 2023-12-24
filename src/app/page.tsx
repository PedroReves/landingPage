import Hero from "./components/Hero";
import Clients from "./components/Client";
import Benefits from "./components/Benefits";
import Unlock from "./components/Unlock";
import Achievements from "./components/Achievements";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Clients />
        <Benefits />
        <Unlock />
        <Achievements />
      </main>
    </>
  );
}
