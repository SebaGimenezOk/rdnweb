

// import Borrador from "./components/Borrador";
import Footer from "./components/Footer";
// import Home from "./components/Home";
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
        <Institucional />
        {/* <Home /> */}
        <Podcast />
        <Footer />
        {/* <Borrador/> */}
      </div>
    </div>
  );
}


export default App;
