import NavBar from "./Component/NavBar";
import Slider from "./Component/Slider";
import OnePage from "./Component/OnePage";
import AudioPlayer from "./Component/AudioPlayer";
import "./App.scss";

function App() {
  return (
    <>
      <NavBar />
      <Slider />
      <OnePage />
      <AudioPlayer />
      <h1 className=" bg-yellow-500">app</h1>
    </>
  );
}

export default App;
