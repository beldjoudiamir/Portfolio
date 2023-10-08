import React, { useState, useRef, useEffect } from "react";
import track1 from "../../../public/Music/Aurora.mp3";
import track2 from "../../../public/Music/X2Download.app - LP-Lost On You-Lyrics (128 kbps).mp3";
import track3 from "../../../public/Music/Solar.mp3";
import albumMusic from "../../../public/Artist/61+PrnVotwL._UF894,1000_QL80_.jpg";
import play from "../../../public/play-icon.svg";
import shuffle from "../../../public/shuffle-icon.svg";
import next from "../../../public/next-icon.svg";
import prev from "../../../public/prev-icon.svg";
import pause from "../../../public/pause-icon.svg";
import "./style.scss";
const tracks = [
  { title: "track1", artist: "Betical", id: 1 },
  { title: "track2", artist: "Betical", id: 2 },
  { title: "track", artist: "Betical", id: 1 },
];

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNextTrack = () => {
    const newIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(newIndex);
  };

  const playPrevTrack = () => {
    const newIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(newIndex);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = tracks[currentTrackIndex];
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((error) => {
        setIsPlaying(false);
      });
  }, [currentTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      const progressValue = (audio.currentTime / audio.duration) * 100;
      setProgress(progressValue);
    };

    audio.addEventListener("timeupdate", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  return (
    <>
      <div className="h-screen flex lg:items-center  lg:justify-center m-10">
        <div className="flex justify-center items-center h-screen">
          <div className="flex-grow  bg-red-500 w-3/12 p-1 rounded-lg md:m-12 lg:p-4">
            <div className="flex justify-center mt-5">
              <img
                src={albumMusic}
                alt=""
                className="w-1/2 h-1/2 md:w-1/4 lg:h-3/4"
              />
            </div>
            <div className="pt-5 pr-12 pb-12 pl-12 md:pl-5 lg:pr-6">
              <div className="flex justify-between">
                <div className="topLetfContent">
                  <h1 className=" text-black text-xl">{tracks.titel}</h1>
                  <p className=" text-gray-500 font-bold">Vxxx</p>
                  <p className=" text-gray-400 font-thin text-sm mt-auto mb-0.5">
                    <span>1</span>/4
                  </p>
                </div>
              </div>

              <audio ref={audioRef}></audio>
              <div className=" relative left-0 m-8 mt-9 mb-15 bg-gray-600  rounded cursor-pointer ">
                <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <span className="absolute top-2.5 text-sm text-gray-500 pointer-events-none right-0"></span>
                <span className="absolute top-2.5 text-sm text-gray-500 pointer-events-none right-0"></span>
              </div>
              <nav className="relative flex justify-center items-center">
                <button className="absolute left-0">
                  <img
                    src={shuffle}
                    alt="shuffleIcone"
                    className="w-5 text-gray-600 transition-fill duration-200 ease-in-out"
                  />
                </button>
                <button
                  onClick={playPrevTrack}
                  className="bg-transparent border-0 cursor-pointer focus:outline-none"
                >
                  <img
                    src={prev}
                    alt="prevIcone"
                    className="w-6 pointer-events-none"
                  />
                </button>
                <button
                  onClick={togglePlayPause}
                  className="flex justify-center items-center h-16 w-16 rounded-full mx-3.5"
                >
                  {isPlaying ? (
                    <img
                      src={pause}
                      alt="playIcone"
                      className=" w-full pointer-events-none"
                    />
                  ) : (
                    <img
                      src={play}
                      alt="playIcone"
                      className=" w-full pointer-events-none"
                    />
                  )}
                </button>
                <button
                  onClick={playNextTrack}
                  className="bg-transparent border-0 cursor-pointer focus:outline-none"
                >
                  <img
                    src={next}
                    alt="nextIcone"
                    className="w-6 pointer-events-none"
                  />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AudioPlayer;
