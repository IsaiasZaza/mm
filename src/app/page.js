import Lancamento from "./components/Lancamento";
import Slider from "./components/Slider";
import MaisVendidos from "./components/MaisVendidos";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Slider />
      <Lancamento />
      <MaisVendidos />
      <Testimonials />
    </main>
  );
}
