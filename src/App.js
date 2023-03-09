import Footer from "./Componets/Footer";
import Hero from "./Componets/Hero";
import ImageSlider from "./Componets/ImageSlider";
import Navbar from "./Componets/Navbar";
import Offers from "./Componets/Offers";
import Plan from "./Componets/Plan";
import Rooms from "./Componets/Rooms";


function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Offers/>
      <Plan/>
      <Rooms/>
      <ImageSlider/>
      <Footer/>
    </div>
  );
}

export default App;
