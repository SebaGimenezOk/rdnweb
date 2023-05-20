

// import Borrador from "./components/Borrador";

import Banner2 from "./components/BannerOnu";
import Banner1 from "./components/Banner1";
import Footer from "./components/Footer";
import Institucional from "./components/Institucional";
import NavBar from "./components/NavBar";
import Podcast from "./components/Podcast";
import Video from "./components/Video";



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
        {/* <Home /> */}
        <Podcast />
        <Footer />
        {/* <Borrador/> */}
      </div>
    </div>
  );
}


export default App;
