import Lancamento from "./components/Lancamento";
import Slider from "./components/Slider";
import MaisVendidos from "./components/MaisVendidos";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <main>
      <Slider />
      <AboutUs />
      <Lancamento />
      <MaisVendidos />
      <Testimonials />
    </main>
  );
}
