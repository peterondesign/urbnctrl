import { useState } from "react";
import PlayIcon from "../assets/svgs/playIcon";
import video from "../assets/video/urban.mp4";
import ReactPlayer from "react-player";
import PauseIcon from "../assets/svgs/pauseIcon";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hideController, setHideController] = useState(false);
  const [count, setCount] = useState(0);
  const [rangeProgress, setRangeProgress] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (progress) => {
    if (count > 3) {
      setHideController(true);
      setCount(0);
    }
    if (!hideController) {
      setCount(count + 1);
    }
    setRangeProgress(progress?.played);
  };

  const handleMouseMove = () => {
    setHideController(false);
    setCount(0);
  };

  return (
    <div
      className="w-full relative h-[300px] sm:h-[360px]"
      onMouseMove={handleMouseMove}
    >
      <ReactPlayer
        url={video}
        className="player"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        playing={isPlaying}
        onProgress={handleProgress}
        onEnded={() => {
          setIsPlaying(false);
          setHideController(false);
          setCount(0);
        }}
        // controls
      />
      {!hideController && (
        <div className="absolute inset-0 z-10  flex items-end px-[24px]">
          <span
            className="[&>svg]:w-[50px] [&>svg]:h-[50px] sm:[&>svg]:w-[80px] sm:[&>svg]:h-[80px] absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={handlePlayPause}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </span>
          <div className="relative max-w-[1200px] w-full mb-[24px] mx-auto">
            <div className="bg-[#706668] h-[6px] w-full"></div>
            <div
              className="absolute h-[6px]  bg-primary top-0 left-0"
              style={{
                width: `${rangeProgress * 100}%`,
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
