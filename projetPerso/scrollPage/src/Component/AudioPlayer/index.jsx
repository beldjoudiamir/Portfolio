import "./style.scss";
import albumMusic from "../../../public/albumMusic/61+PrnVotwL._UF894,1000_QL80_.jpg";
import play from "../../../public/play-icon.svg";
import shuffle from "../../../public/shuffle-icon.svg";
import next from "../../../public/next-icon.svg";
import prev from "../../../public/prev-icon.svg";

function audioPlayer() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" bg-red-500 m-24 p-1 rounded-lg">
        <div className="flex justify-center">
          <img src={albumMusic} alt="" className="w-1/2 h-1/2" />
        </div>
        <div className="pt-5 pr-12 pb-12 pl-12">
          <div className="flex justify-between">
            <div className="topLetfContent">
              <h1 className=" text-black text-xl">Tiki taka</h1>
              <p className=" text-gray-500 font-bold">Vacara</p>
              <p className=" text-gray-400 font-thin text-sm mt-auto mb-0.5">
                <span>1</span>/4
              </p>
            </div>
          </div>

          <audio src="../../../public/albumMusic/X2Download.app - LP-Lost On You-Lyrics (128 kbps).mp3"></audio>
          <div className="ProgressContainer">
            <div className="progressBar"></div>
            <span className="timeIndicateur currentTime"></span>
            <span className="timeIndicateur durationTime"></span>
          </div>
          <nav className="navigation">
            <button className="shuffle w-auto">
              <img src={shuffle} alt="shuffleIcone" />
            </button>
            <button className="prevBtn w-6">
              <img src={prev} alt="prevIcone" />
            </button>
            <button className="playBtn w-auto">
              <img src={play} alt="playIcone" />
            </button>
            <button className="nextBtn w-6">
              <img src={next} alt="nextIcone" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default audioPlayer;
