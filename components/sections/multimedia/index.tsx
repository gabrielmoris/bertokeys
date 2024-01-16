"use client";

import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Loading } from "../../uiComponents/loading";

const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";

const key = process.env.NEXT_PUBLIC_YOUTUBE_KEY;

export const Multimedia = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [youtubeListLatestVideos, setYoutubeListLatestVideos] = useState<any>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % youtubeListLatestVideos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + youtubeListLatestVideos.length) % youtubeListLatestVideos.length);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSmallScreen(window.innerWidth <= 768);
    }

    fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLQ1eHTJUzMQTpZXSnuDDoyzCLUsonaBJM&maxResults=4&key=${key}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setYoutubeListLatestVideos(data.items))
      .catch((e) => {
        console.log("Error in youtube API", e);
      });
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center  xl:w-[85%]" id="multimedia">
      <h1 className="font-zendots text-xl  md:text-2xl font-bold text-center m-10">Escucha mi trabajo</h1>
      <div className="flex items-center gap-5 justify-center w-full">
        <button onClick={handlePrev}>
          <svg
            enableBackground="new 0 0 15 26"
            height="26px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 15 26"
            width="15px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon fill="#969696" points="12.885,0.58 14.969,2.664 4.133,13.5 14.969,24.336 12.885,26.42 2.049,15.584 -0.035,13.5 " />
          </svg>
        </button>
        {youtubeListLatestVideos.length > 0 && (
          <ReactPlayer
            className="rounded border-2 border-black dark:border-white"
            controls
            width={!isSmallScreen ? "100%" : ""}
            height={!isSmallScreen ? "450px" : ""}
            key={youtubeListLatestVideos[currentIndex].id}
            fallback={<Loading />}
            url={`https://www.youtube.com/watch?v=${youtubeListLatestVideos[currentIndex].snippet.resourceId.videoId}`}
          />
        )}
        <button onClick={handleNext}>
          <svg
            enableBackground="new 0 0 15 26"
            height="26px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 15 26"
            width="15px"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(180deg)" }}
          >
            <polygon fill="#969696" points="12.885,0.58 14.969,2.664 4.133,13.5 14.969,24.336 12.885,26.42 2.049,15.584 -0.035,13.5 " />
          </svg>
        </button>
      </div>
    </div>
  );
};
