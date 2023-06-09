
import Banner2 from "./components/BannerOnu";
import Banner1 from "./components/Banner1";
import Footer from "./components/Footer";
import Institucional from "./components/Institucional";
import NavBar from "./components/NavBar";
import Podcast from "./components/Podcast";
import Video from "./components/Video";
import Contact from "./components/Contact";



function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <Video />
        <Banner1 />
        <Institucional />
        <Banner2 />
        <Podcast />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}


export default App;
