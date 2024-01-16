"use client";

import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Loading } from "../../uiComponents/loading";

const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";

const key = process.env.NEXT_PUBLIC_YOUTUBE_KEY;

export const Multimedia = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [youtubeListLatestVideos, setYoutubeListLatestVideos] = useState([]);

  useEffect(() => {
    setIsSmallScreen(window.innerWidth <= 768);
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
    <div className="w-full flex flex-col items-center justify-center  xl:w-[80%]" id="multimedia">
      <h1 className="font-zendots text-xl  md:text-2xl font-bold text-center m-10">Escucha mi trabajo</h1>
      <div className="flex gap-10 flex-row flex-wrap justify-center xl:justify-between items-stretch ">
        {youtubeListLatestVideos.map((video) => {
          const { id, snippet = {} }: any = video;
          const { resourceId }: any = snippet;

          return (
            <ReactPlayer
              className="rounded border-2 border-black dark:border-white"
              controls
              width={!isSmallScreen ? "480px" : "350px"}
              height={!isSmallScreen ? "400px" : "200px"}
              key={id}
              fallback={<Loading />}
              url={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
            />
          );
        })}
      </div>
    </div>
  );
};
