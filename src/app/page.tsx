import Hero from "./components/Hero";
import Clients from "./components/Client";
import Benefits from "./components/Benefits";
import Unlock from "./components/Unlock";
import Achievements from "./components/Achievements";
import Design from './components/Design';
import Customer from './components/Customer';
import Updates from './components/Updates'
import Demo from './components/Demo'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Clients />
        <Benefits />
        <Unlock />
        <Achievements />
        <Design />
        <Customer />
        <Updates />
        <Demo />
      </main>
    </>
  );
}
