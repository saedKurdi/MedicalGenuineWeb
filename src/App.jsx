import { HeaderSection } from "./Components/Header/Header";
import { Hero } from "./Components/Hero/Hero";
import { Doctors } from "./Components/Doctors/Doctors";
import { Experts } from "./Components/Experts/Experts";
import { Info } from "./Components/Info/Info";
import { Department } from "./Components/Department/Department";
import { Pricing } from "./Components/Pricing/Pricing";
import { Clients } from "./Components/Clients/Clients";
import { JoinUs } from "./Components/JoinUs/JoinUs";
import { Footer } from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <HeaderSection />
      <Hero />
      <Doctors />
      <Experts />
      <Info />
      <Department />
      <Pricing />
      <Clients />
      <JoinUs />
      <Footer />
    </>
  );
}

export default App;
