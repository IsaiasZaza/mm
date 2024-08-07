import Lancamento from "./components/Lancamento";
import Slider from "./components/Slider";
import MaisVendidos from "./components/MaisVendidos";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";


export default function Home() {
  return (
    <main>
      <Slider />
      <div id="sobre">
        <AboutUs />
      </div>
      <div id="produtos" className="pt-6">
        <Lancamento />
        <MaisVendidos />
      </div>
      <Testimonials />
    </main>
  );
}
