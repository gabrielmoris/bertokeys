"use client";

import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";

const key = process.env.NEXT_PUBLIC_YOUTUBE_KEY;

export const Multimedia = () => {
  const [youtubeListConcert, setYoutubeListConcert] = useState([]);
  const [youtubeListLatestVideos, setYoutubeListLatestVideos] = useState([]);

  useEffect(() => {
    fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PL_1PtPZ6qufyEK5c682JAbk8VAe8Cyz2P&maxResults=4&key=${key}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setYoutubeListConcert(data.items))
      .catch((e) => {
        console.log("Error in youtube API", e);
      });
    fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PL_1PtPZ6qufySoZIHCMxMDQDZ68ZAVvTU&maxResults=4&key=${key}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setYoutubeListLatestVideos(data.items))
      .catch((e) => {
        console.log("Error in youtube API", e);
      });
  }, [key]);

  return (
    <div className="classes-list">
      <h1 className="text-2xl font-bold text-center m-10">Multimedia</h1>
      <div className="w-full grid grid-flow-row grid-cols-2 gap-5">
        {youtubeListLatestVideos.map((video) => {
          const { id, snippet = {} }: any = video;
          const { resourceId }: any = snippet;

          return (
            <ReactPlayer
              className="rounded border-2 border-black dark:border-white"
              key={id}
              url={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
            />
          );
        })}
      </div>
    </div>
  );
};
